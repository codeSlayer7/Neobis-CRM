interface IStatusProps {
  status: 'loading' | 'success' | 'error';
}

enum StatusEnum {
  loading = 'loading',
  success = 'success',
  error = 'error',
}

function Status(props: IStatusProps) {
  const { status } = props;
  let message;
  if (status === StatusEnum.loading) {
    message = 'Loading';
  } else if (status === StatusEnum.success) {
    message = 'Data fetched successfully';
  } else if (status === StatusEnum.error) {
    message = 'Error';
  }
  return (
    <div>
      <h2> Status {message}</h2>
      {/* <h2>Loading</h2>
      <h2>Data fetched successfully</h2>
      <h2>Error fetching data</h2> */}
    </div>
  );
}

export default Status;
