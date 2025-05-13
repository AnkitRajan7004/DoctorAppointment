import HashLoader from 'react-spinners/HashLoader';

const Loading = ({ size = 50, message = 'Loading, please wait...' }) => {
  return (
    <div className="flex items-center justify-center w-full h-full flex-col">
      <HashLoader color="#0067FF" size={size} />
      {message && <p className="mt-4 text-lg text-textColor">{message}</p>}
    </div>
  );
};

export default Loading;
