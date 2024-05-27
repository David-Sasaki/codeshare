const BASE_URL = "http://localhost:8000/sessions/";

export const generateRandomString = () => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  const length = 10;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export const createSession = (session: any) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(session)
  };
  fetch(`${BASE_URL}`, requestOptions);
};

export const getSession = async (id: any) => {
  const requestOptions = {
    method: 'GET',
  };
  const response = await fetch(`${BASE_URL}get/${id}`, requestOptions);
  const data = await response.json();
  return data;
};

export const updateSession = (id: any, session: any) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(session)
  };
  fetch(`${BASE_URL}update/${id}`, requestOptions);
};
