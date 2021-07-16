<template>
  <div>
    <contact v-for="(contact, index) in contacts" :key="contact.id" :contact="contact" :index="index" />
  </div>
</template>

<script>
import Contact from './Contact.vue';

export default {
  components: {
    Contact,
  },
  computed: {
    contacts() {
      return this.$store.getters.getAllContacts;
    },
  },
};
</script>

<style lang="scss"></style>
