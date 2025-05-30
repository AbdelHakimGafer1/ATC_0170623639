import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="bg-gray-800 border-spacing-1 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-[#FF0984] font-bold tracking-tight">
          <Link className="text-[rgb(141,255,141)]" to="/">Coder</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-[#FF0984] transition-all px-3 font-bold hover:bg-black-700"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-[#FF0984] px-3 font-bold hover:bg-black-700"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-black-700 items-center text-[#FF0984] px-3 font-bold hover:bg-black-700"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
