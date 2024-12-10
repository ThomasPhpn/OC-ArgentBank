import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";

const Navbar = () => {
  const { user, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-5 shadow-md">
      <Link to="/" className="flex items-center">
        <img
          src="/img/argentBankLogo.png"
          alt="Argent Bank Logo"
          className="w-[240px]"
        />
      </Link>

      {token ? (
        <div className="flex items-center space-x-4">
          <Link
            to="/user"
            className="flex items-center text-gray-700 font-bold"
          >
            <i className="fa fa-user-circle mr-2"></i>{" "}
            {user?.userName || user?.firstName}
          </Link>
          <button
            onClick={handleSignOut}
            className="flex items-center text-gray-700 font-bold"
          >
            <i className="fa fa-sign-out-alt mr-2"></i> Sign Out
          </button>
        </div>
      ) : (
        <Link to="/login" className="flex items-center text-gray-700 font-bold">
          <i className="fa fa-user-circle mr-2"></i> Sign In
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
