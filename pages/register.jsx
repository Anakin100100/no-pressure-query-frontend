import Register from "../components/Register";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const RegisterPage = (props) => {
  return (
    <div>
      <Navbar />
      <Register />
    </div>
  );
};

export default RegisterPage;
