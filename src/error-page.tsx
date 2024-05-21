import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error: unknown = useRouteError();
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p className="text-gray-800 my-4 font-semibold">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-red-600 text-xl font-semibold">
        <i>
          {(error as { statusText?: string })?.statusText ||
            (error as Error)?.message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
