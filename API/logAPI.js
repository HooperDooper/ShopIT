const API_TOKEN = "d7709bfaa9d07a6599f53bc548fc4df0";

import base64 from "base-64";

const rootEndpoint = "https://protected-thicket-49800.herokuapp.com/api";

const punkApiKey = "d7709bfaa9d07a6599f53bc548fc4df0";
const password = "";
const authBase64 = base64.encode(`${punkApiKey}:${password}`);

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  Authorization: `Basic ${authBase64}`,
  email: @expo.listener.email,
  password: @expo.listener.password
};


export const getData = () =>
  fetch(`${rootEndpoint}/auth/login`, { headers }).then(
    ({ status, json }) => {
      if (status !== 200)
        throw new Error(`API answered with status code ${status}`);
      else return json();
    },
  );
