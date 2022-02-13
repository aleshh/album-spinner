import useDelay from "../utils/useDelay";

type PageProps = {
  error: string;
};

const ErrorPage = ({ error }: PageProps): JSX.Element => {
  const show = useDelay();

  return (
    <div className="container">
      {show && (
        <div className="content">
          <h1>💣</h1>
          <h3>Oops, something went wrong!</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
