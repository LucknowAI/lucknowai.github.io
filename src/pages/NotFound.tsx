import MainLayout from "@/components/layout/MainLayout";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <MainLayout>
      <div className="px-8 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-6">
          The page you requested could not be found. Try using the navigation or
          search to find what you're looking for or go to this{" "}
          <Link to="/" className="text-primary hover:underline">
            site's home page
          </Link>
          .
        </p>

        <hr className="border-border mb-8" />

        <a href="#" className="text-primary hover:underline">
          Back to top
        </a>

        <div className="mt-8 text-xs text-muted-foreground">
          <p>
            Copyright © 2017 Lucknow AI. Distributed by an{" "}
            <a
              href="https://opensource.org/licenses/MIT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              MIT license
            </a>
            .
          </p>
        </div>

        <div className="mt-4">
          <a
            href="https://github.com/LucknowAI/lucknowai.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm"
          >
            Edit this page on GitHub
          </a>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
