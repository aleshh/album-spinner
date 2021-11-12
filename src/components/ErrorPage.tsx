import { AlertCircle } from "react-feather";

type PageProps = {
  error: string;
};

const ErrorPage = ({ error }: PageProps): JSX.Element => {
  return (
    <div className="container">
      <div className="content">
        <AlertCircle />
        <h2>{error}</h2>
      </div>
    </div>
  );
};

export default ErrorPage;
