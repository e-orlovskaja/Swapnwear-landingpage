import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <main role="main" className="min-h-screen flex items-center justify-center bg-gray-100">
      <section aria-labelledby="not-found-heading" className="text-center">
        <h1 id="not-found-heading" className="text-4xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">Return to Home</a>
      </section>
    </main>
  );
};

export default NotFound;
