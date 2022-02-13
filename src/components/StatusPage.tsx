import useDelay from "../utils/useDelay";

type PageProps = {
  status: string;
};

const StatusPage = ({ status }: PageProps): JSX.Element => {
  const show = useDelay();

  return (
    <div className="container">
      {show && (
        <div className="content">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default StatusPage;
