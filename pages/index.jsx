import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const Home = (props) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="bg-gray-200 flex justify-center items-center flex-grow">
        <div className="flex">
          <h1 className="text-3xl font-semibold text-center py-8">
            Welcome to No Pressure Query
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
