type PageProps = {
  status: string;
};

const StatusPage = ({ status }: PageProps): JSX.Element => {
  return (
    <div className="container">
      <div className="content">
        <p>{status}</p>
      </div>
    </div>
  );
};

export default StatusPage;
