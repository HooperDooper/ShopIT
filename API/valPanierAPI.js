

import base64 from "base-64";

const rootEndpoint = "https://protected-thicket-49800.herokuapp.com/api";

const punkApiKey = @expo.context.token;
const password = "";
const authBase64 = base64.encode(`${punkApiKey}:${password}`);
