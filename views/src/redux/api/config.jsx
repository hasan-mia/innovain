const config = {};
config.baseUrl = process.env.REACT_APP_BASE_URL;
config.accesstoken = process.env.REACT_APP_ACCESS_TOKEN_SECRET;
config.basicHeader = {
  headers: {
    "Content-Type": "application/json",
    authorization: config.accesstoken,
  },
};
config.paramsWithHeader = (param) => {
  const params = {
    params: param,
    headers: {
      "Content-Type": "application/json",
      authorization: config.accesstoken,
    },
  };
  return params;
};
config.authHeader = (token) => {
  const header = {
    headers: {
      "Content-Type": "application/json",
      authorization: config.accesstoken,
      token,
    },
  };
  return header;
};
config.authHeaderwithParams = (param, token) => {
  const header = {
    params: param,
    headers: {
      "Content-Type": "application/json",
      authorization: config.accesstoken,
      token,
    },
  };
  return header;
};
config.fileHeader = (token) => {
  const header = {
    headers: {
      "Content-Type": "multipart/form-data",
      authorization: config.accesstoken,
      token,
    },
  };
  return header;
};
config.token = () => {
  const session = localStorage.getItem("session");
  let user = null;
  if (session) {
    user = JSON.parse(helpers.decrypt(session));
  }
  return user.token;
};


export default config;