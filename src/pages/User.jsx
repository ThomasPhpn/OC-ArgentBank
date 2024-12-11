import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchProfile } from "../store/features/authSlice";

const User = () => {
  const { user, token } = useSelector((state) => state.auth);
  const [editing, setEditing] = useState(false);
  const [newUsername, setNewUsername] = useState(user?.userName || "");
  const dispatch = useDispatch();

  const handleSaveUsername = async () => {
    try {
      const response = await axios.put(
        "http://localhost:3001/api/v1/user/profile",
        { userName: newUsername },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        dispatch(fetchProfile(token));
        setEditing(false);
        console.log(user);
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour du username :", error);
    }
  };

  return (
    <div className="min-h-full bg-dark-purple flex flex-col">
      <div className="flex-grow bg-dark-purple text-white py-10 px-6 text-center">
        <h1 className="text-3xl font-bold">
          Welcome back{" "}
          {user?.userName
            ? user.userName
            : `${user?.firstName || ""} ${user?.lastName || ""}`}
          !
        </h1>
        {editing ? (
          <div className="mt-4">
            <input
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              className="px-4 py-2 border text-blue-950 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your new username"
            />
            <button
              onClick={handleSaveUsername}
              className="ml-4 px-4 py-2 bg-green-500 text-white rounded font-bold hover:bg-green-600"
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded font-bold hover:bg-green-600"
          >
            Edit Name
          </button>
        )}
      </div>
    </div>
  );
};

export default User;
