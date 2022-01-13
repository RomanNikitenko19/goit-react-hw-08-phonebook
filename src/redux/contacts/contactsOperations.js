import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/api";

const API_ENDPOINT = "contacts";

const getContacts = createAsyncThunk("contacts/getUtterContactsStatus", (token) =>
  api.getContacts(API_ENDPOINT, token)
);

const addContact = createAsyncThunk("contacts/addContactStatus", ({ newContact, token }) =>
  api.addContact(API_ENDPOINT, newContact, token)
);

const deleteContact = createAsyncThunk("contacts/deleteContactStatus", ({ id, token }) =>
  api.deleteContact(API_ENDPOINT, id, token).then(()=>id)
);

export { getContacts, addContact, deleteContact };