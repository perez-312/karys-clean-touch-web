
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-clean-light-blue font-bold text-7xl mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="bg-clean-light-blue hover:bg-blue-500 transition-colors w-full sm:w-auto">
              Return Home
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline" className="border-clean-light-blue text-clean-light-blue hover:bg-clean-light-blue/10 w-full sm:w-auto">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
