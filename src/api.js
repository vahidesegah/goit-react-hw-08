import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global/";

// Set auth token for requests
export const setAuthToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Remove auth token
export const clearAuthToken = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

// Fetch contacts
export const fetchContacts = async () => {
  const { data } = await axios.get("/contacts");
  return data;
};

// Add a new contact
export const addContact = async (contact) => {
  const { data } = await axios.post("/contacts", contact);
  return data;
};

// Delete a contact
export const deleteContact = async (id) => {
  await axios.delete(`/contacts/${id}`);
  return id;
};
