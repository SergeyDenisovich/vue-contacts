import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts') || '[]'),
    contactsCopy: [],
    nonEditContacts: [],
  },
  mutations: {
    addContact(state, newContact) {
      const newContactId = state.contacts.length + 1;
      newContact.id = newContactId;
      state.contacts.push(newContact);

      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    deleteContact(state, id) {
      state.contacts = state.contacts.filter((contact) => contact.id !== id);

      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
    updateContact(state, contact) {
      state.contacts = state.contacts.map((elem) => {
        if (elem.id === contact.id) {
          return {
            ...contact,
          };
        } else {
          return elem;
        }
      });

      localStorage.setItem('contacts', JSON.stringify(state.contacts));
    },
  },
  actions: {},
  getters: {
    getAllContacts(state) {
      return state.contacts;
    },
    getContactsCopy(state) {
      let contactsClone = JSON.parse(JSON.stringify(state.contacts));
      return (state.contactsCopy = contactsClone);
    },
    getNonEditContacts(state) {
      let nonEdited = JSON.parse(JSON.stringify(state.contacts));
      return (state.nonEditContacts = nonEdited);
    },
  },
  modules: {},
});
