const BASE_URL = "http://connections-api.herokuapp.com";

const fetchData = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const signupUser = (endpoint, newUser) => {
  const options = {
    method: "POST",
    body: JSON.stringify(newUser), //example newUser{"name": "Adrian Cross","email": "across@mail.com", "password": "examplepassword"}
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetchData(endpoint, options);
};

const loginUser = (endpoint, user) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user), //example user{"email": "string","password": "string"}
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  return fetchData(endpoint, options);
};

const logoutUser = (endpoint, token) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return fetchData(endpoint, options);
};

const getCurrentUser = (endpoint, token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return fetchData(endpoint, options);
};

const getContacts = (endpoint, token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return fetchData(endpoint, options);
};

const addContact = (endpoint, elem, token) => {
  const options = {
    method: "POST",
    body: JSON.stringify(elem),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
  };
  return fetchData(endpoint, options);
};

const deleteContact = (endpoint, id, token) =>
  fetchData(`${endpoint}/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json; charset=UTF-8", Authorization: `Bearer ${token}` },
  });

export { signupUser, loginUser, logoutUser, getCurrentUser, getContacts, addContact, deleteContact };
