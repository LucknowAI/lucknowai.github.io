# -*- encoding: utf-8 -*-
# stub: afm 0.2.2 ruby lib

Gem::Specification.new do |s|
  s.name = "afm".freeze
  s.version = "0.2.2".freeze

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Jan Krutisch".freeze]
  s.date = "2014-06-19"
  s.description = "a simple library to read afm files and use the data conveniently".freeze
  s.email = "jan@krutisch.de".freeze
  s.extra_rdoc_files = ["LICENSE".freeze, "README.rdoc".freeze]
  s.files = ["LICENSE".freeze, "README.rdoc".freeze]
  s.homepage = "http://github.com/halfbyte/afm".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "2.2.2".freeze
  s.summary = "reading Adobe Font Metrics (afm) files".freeze

  s.installed_by_version = "3.5.16".freeze if s.respond_to? :installed_by_version

  s.specification_version = 4

  s.add_development_dependency(%q<rake>.freeze, ["~> 10.3".freeze])
  s.add_development_dependency(%q<rdoc>.freeze, ["~> 4.1".freeze])
  s.add_development_dependency(%q<minitest>.freeze, ["~> 5.3".freeze])
end
