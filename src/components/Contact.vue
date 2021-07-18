<template>
  <router-link tag="div" class="contact" :to="`/contact/${contact.id}`">
    <h4>{{ index + 1 }}</h4>
    <div>{{ contact.name.toUpperCase() }}</div>
    <button @click.stop="deleteContact(contact.id)" class="contact__delete-btn">&times;</button>
  </router-link>
</template>

<script>
export default {
  props: {
    contact: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    deleteContact(id) {
      if (confirm(`Удалить контакт: ${this.contact.name}?`)) {
        this.$store.commit('deleteContact', id);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.contact {
  max-width: 600px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 2px 4px -1px #000350;

  &__delete-btn {
    border: none;
    cursor: pointer;
    background-color: #ff0000;
    color: #ffffff;
    outline: none;
  }
}
</style>
