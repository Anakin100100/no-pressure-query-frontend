import dynamic from "next/dynamic";
import { UserContext } from "../contexts/user_context";
import { useContext } from "react";

const Navbar = dynamic(() => import("../components/Navbar"), { ssr: false });

const Profile = () => {
  const [token, setToken] = useContext(UserContext);

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="bg-gray-200 flex justify-center items-center flex-grow">
        <div className="flex">
          <h1 className="text-3xl font-semibold">
            {((token) => {
              if (typeof window != "undefined") {
                console.log(`token is ${token}`);

                if (token != undefined && token != "none") {
                  var base64Payload = token.split(".")[1];
                  var payload = Buffer.from(base64Payload, "base64");
                  return JSON.parse(payload.toString()).email;
                }
              }
            })(token)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
