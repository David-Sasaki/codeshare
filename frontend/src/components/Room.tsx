import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { getSession, updateSession } from "../utils";
import { Session } from "../types";
import { TIME_LIMIT } from "../consts";

const Room: React.FC = () => {
  const { id, user } = useParams();
  const navigate = useNavigate();
  const [session, setSession] = useState<any>(null);

  const handleClick = () => {
    const handleQuit = async () => {
      let session: Session = await getSession(id);
      session.users = session.users.filter((item) => item !== user);
      updateSession(id, session);
      navigate("/");
    };
    handleQuit();
  };

  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const loadSession = async () => {
      const sess: Session = await getSession(id);
      setSession(sess);
    };
    loadSession();
  });

  useEffect(() => {
    if (session) {
      const currentDate: Date = new Date();
      const startDate: Date = new Date(session.time);
      const milliDiff: number = currentDate.getTime() - startDate.getTime();
      setExpired(milliDiff > TIME_LIMIT);
    }
  }, [session]);

  const handleChange = (value: string) => {
    let newSession: Session = { ...session };
    newSession.code = value;
    setSession(newSession);
    updateSession(id, newSession);
  };

  return (
    <div>
      <h1>Session: {id}</h1>
      <h1>User: {user}</h1>
      {expired ? (
        "Session has been expired!"
      ) : (
        <div>
          <CodeEditor
            value={session?.code}
            language="js"
            placeholder="Please enter JS code."
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              handleChange(e.target.value)
            }
            padding={15}
            style={{
              backgroundColor: "#f5f5f5",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
          <button onClick={handleClick}>Quit</button>
        </div>
      )}
    </div>
  );
};

export default Room;
