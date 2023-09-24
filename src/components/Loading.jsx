import { loading } from "../assets";

const Loading = () => (
  <div className="w-full flex flex-col justify-center items-center">
    <img
      src={loading}
      alt="loading"
      className="w-32 h-32 object-contain ml-10"
    />
    <h1 className="font-bold text-2xl text-white mt-2">Loading....</h1>
  </div>
);

export default Loading;
