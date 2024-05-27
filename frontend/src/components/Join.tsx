import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSession, updateSession } from "../utils";
import { Session } from "../types";

const Join: React.FC = () => {
  const { id } = useParams();
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (user.length === 0) {
      alert("Input the username!");
    } else {
      const loadExistingUsers = async () => {
        let session: Session = await getSession(id);
        if (session.users.find((item: any) => item === user)) {
          alert("Input another user!");
        } else if (session.users.length === 5) {
          alert("Five users already joined!");
        } else {
          session.users.push(user);
          updateSession(id, session);
          navigate(`/session/${id}/${user}`);
        }
      };
      loadExistingUsers();
    }
  };

  return (
    <div>
      Input your name:{" "}
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <hr />
      <button onClick={handleClick}>Joining Session-{id}</button>
    </div>
  );
};

export default Join;
