<template>
  <div class="home">
    <h1>Contacts</h1>
    <p v-if="!contacts.length">No contacts</p>
    <button v-if="!addContactBlock" @click="addContact">
      <img src="../assets/images/add.svg" alt="Add icon" />
      <span>Add contact</span>
    </button>
    <div v-show="addContactBlock">
      <add-contact @closeAddContactBlock="closeAddContactBlock" />
    </div>
    <contacts-list />
  </div>
</template>

<script>
import ContactsList from '@/components/ContactsList';
import AddContact from '@/components/AddContact.vue';

export default {
  name: 'Home',
  data: () => ({
    addContactBlock: false,
  }),
  components: {
    ContactsList,
    AddContact,
  },
  computed: {
    contacts() {
      return this.$store.getters.getAllContacts;
    },
  },
  methods: {
    addContact() {
      this.addContactBlock = true;
    },
    closeAddContactBlock() {
      this.addContactBlock = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  button {
    margin: 0 auto 22px;
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
    }
  }
}
</style>
