/*  ./components/Navbar.jsx     */
import Link from "next/link";
import { useState } from "react";
import { UserContext } from "../contexts/user_context";
import { useContext } from "react";

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const [token, setToken] = useContext(UserContext);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-400 p-3">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current text-white h-8 w-8 mr-2"
            >
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
            </svg>
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              Talwind CSS
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:space-x-2 lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white transition ease-in-out duration-500">
                Home
              </a>
            </Link>
            <Link href="/profile">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white transition ease-in-out duration-500">
                Profile
              </a>
            </Link>
            <Link href="/surveys/main">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white transition ease-in-out duration-500">
                Surveys
              </a>
            </Link>
          </div>
          <div className="lg:inline-flex lg:space-x-2 lg:flex-row lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto ml-0 mt-8 lg:mt-0 lg:ml-8">
            {((token) => {
              console.log(`token is ${token}`);
              if (token == "none" || token == undefined) {
                return (
                  <>
                    <Link href="/login" suppresshydrationwarning>
                      <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white transition ease-in-out duration-500">
                        Login
                      </a>
                    </Link>
                    <Link href="/register" suppresshydrationwarning>
                      <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white transition ease-in-out duration-500">
                        Register
                      </a>
                    </Link>
                  </>
                );
              } else {
                return (
                  <>
                    <Link href="/profile" suppresshydrationwarning>
                      <a
                        onClick={() => {
                          localStorage.setItem("noPressureQueryToken", "none");
                          setToken("none");
                        }}
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded-md text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white transition ease-in-out duration-500"
                      >
                        Log out
                      </a>
                    </Link>
                  </>
                );
              }
            })(token)}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
