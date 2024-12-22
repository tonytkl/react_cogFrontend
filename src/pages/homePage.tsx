import PostBox from "../components/layout/home/postbox";

const user: string = "Maria";
const HomePage = () => {
  return (
    <div className="w-full bg-gray-100 p-2 md:p-6 lg:w-7/12">
      <h1 className="mb-2 text-2xl font-bold">Welcome, {user}</h1>
      <PostBox />
    </div>
  );
};

export default HomePage;
