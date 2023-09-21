export interface ErrorViewProps {
  error?: unknown;
}

const ErrorView = ({ error }: ErrorViewProps) => {
  console.log(error);

  return (
    <div>
      <h3>Sorry, but something has gone wrong.</h3>
      <p>Feel free to check back later.</p>
    </div>
  );
};

export default ErrorView;
