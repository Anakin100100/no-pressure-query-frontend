import Login from "../components/Login";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const LoginPage = (props) => {
  return (
    <div>
      <Navbar />
      <Login />
    </div>
  );
};

export default LoginPage;
