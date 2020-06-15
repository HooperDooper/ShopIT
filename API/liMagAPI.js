

import base64 from "base-64";

const rootEndpoint = "https://protected-thicket-49800.herokuapp.com/api";

const punkApiKey = @expo.context.token;
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
  fetch(`${rootEndpoint}/${@expo.ed1}`, { headers }).then(
    ({ status, json }) => {
      if (status !== 200)
        throw new Error(`API answered with status code ${status}`);
      else return json();
    },
  );
