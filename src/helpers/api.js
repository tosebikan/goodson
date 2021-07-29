import axios from "axios";

// export const endpoint = "http://localhost:1337";
export const endpoint = "https://goodson-admin.herokuapp.com";

export const apiFunctions = {
  getImages: async () => get("/images"),
  getCategories: async () => get("/categories"),
  // register: async fd => post("/auth/local/register", fd),
  // login: async fd => post("/auth/local", fd)
};

export const get = (path) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${endpoint}${path}`)
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        console.log(error.response);
        reject({ status: 500, msg: error.response });
      });
    setTimeout(() => reject({ status: 500, msg: "connection error" }), 10000);
  });
};

export const post = (path, fd) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${endpoint}${path}`, fd, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        console.log(error.response);
        reject({ status: 500, msg: error.response });
      });
    setTimeout(() => reject({ status: 500, msg: "connection error" }), 10000);
  });
};

export const getWithToken = (path, token) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${endpoint}${path}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        console.log(error.response);
        reject({ status: 500, msg: error.response });
      });
    setTimeout(() => reject({ status: 500, msg: "connection error" }), 10000);
  });
};
