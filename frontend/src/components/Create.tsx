import React from "react";
import { useNavigate } from "react-router-dom";
import { generateRandomString, createSession } from "../utils";

const Create: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    const session = {
      id: generateRandomString(),
      time: new Date(),
      users: [],
      code: `function add(a, b) {\n  return a + b;\n}`,
    };
    createSession(session);
    navigate(`/session-join/${session.id}`);
  };

  return (
    <div>
      <button onClick={handleCreate}>Share Code Now</button>
    </div>
  );
};

export default Create;
