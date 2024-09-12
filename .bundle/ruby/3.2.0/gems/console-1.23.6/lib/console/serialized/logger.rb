# frozen_string_literal: true

# Released under the MIT License.
# Copyright, 2019-2023, by Samuel Williams.

require_relative '../buffer'
require_relative '../filter'
require_relative '../format'

require 'time'

require 'fiber/annotation'

module Console
	module Serialized
		class Logger
			def initialize(io = $stderr, format: Format.default, verbose: false, **options)
				@io = io
				@start = Time.now
				@format = format
				@verbose = verbose
			end
			
			attr :io
			attr :start
			attr :format
			
			def verbose!(value = true)
				@verbose = true
			end
			
			def dump(record)
				@format.dump(record)
			end
			
			def call(subject = nil, *arguments, severity: UNKNOWN, **options, &block)
				record = {
					time: Time.now.iso8601,
					severity: severity,
					oid: subject.object_id,
					pid: Process.pid,
				}
				
				# We want to log just a brief subject:
				if subject.is_a?(String)
					record[:subject] = subject
				elsif subject.is_a?(Module)
					record[:subject] = subject.name
				else
					record[:subject] = subject.class.name
				end
				
				if annotation = Fiber.current.annotation
					record[:annotation] = annotation
				end
				
				message = arguments
				
				if block_given?
					if block.arity.zero?
						message << yield
					else
						buffer = StringIO.new
						yield buffer
						message << buffer.string
					end
				end
				
				if message.size == 1
					record[:message] = message.first
				elsif message.any?
					record[:message] = message
				end
				
				if exception = find_exception(message)
					record[:error] = {
						kind: exception.class,
						message: exception.message,
						stack: format_stack(exception)
					}
				end
				
				record.update(options)
				
				@io.puts(self.dump(record))
			end
			
			private
			
			def find_exception(message)
				message.find{|part| part.is_a?(Exception)}
			end
			
			def format_stack(exception)
				buffer = StringIO.new
				format_backtrace(exception, buffer)
				return buffer.string
			end
			
			def format_backtrace(exception, buffer)
				buffer.puts exception.backtrace
				
				if exception = exception.cause
					buffer.puts
					buffer.puts "Caused by: #{exception.class} #{exception.message}"

					format_backtrace(exception, buffer)
				end
			end
		end
	end
end
