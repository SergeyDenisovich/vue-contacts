<template>
  <div class="contact-info">
    <h3>Contact: {{ contact.name.toUpperCase() }}</h3>
    <router-link tag="div" :to="`/`">Back to contact list</router-link>

    <template v-if="showEditContact"> <edit-contact @closeUpdateForm="showEditContact = false" /> </template>
    <div v-else>
      <div v-for="(value, key) in contact" :key="key" class="contact-info__description">
        <p v-if="key !== 'id'">
          <span>{{ key }}:</span>
          <span>{{ value }}</span>
        </p>
      </div>

      <button @click="editContact">
        <img src="../assets/images/edit.svg" alt="Edit icon" />
        <span>Edit contact</span>
      </button>
    </div>
  </div>
</template>

<script>
import EditContact from '@/components/EditContact.vue';

export default {
  name: 'ContactInfo',
  components: {
    EditContact,
  },
  data: () => ({
    id: null,
    showEditContact: false,
  }),
  created() {
    this.id = this.$route.params.id;
  },
  computed: {
    contact() {
      return this.$store.getters.getAllContacts.find((contact) => Number(contact.id) === Number(this.id));
    },
  },
  methods: {
    editContact() {
      this.showEditContact = true;
    },
  },
};
</script>

<style scoped>
.contact-info > h3 + div {
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
.contact-info__description > p {
  display: flex;
}
.contact-info__description > p > span:first-child {
  text-transform: uppercase;
  font-weight: bold;
}
.contact-info__description > p span + span {
  margin-left: 20px;
}
.contact-info button {
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.contact-info button img {
  position: relative;
  top: -3px;
  margin-right: 5px;
}
</style>
