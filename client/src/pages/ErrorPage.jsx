import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-wrapper">
      <h1>Error</h1>
      <p>Page not Found</p>
      <Link to="/">Go back to Homepage?</Link>
    </div>
  );
};

export default ErrorPage;
