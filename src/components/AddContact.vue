<template>
  <div class="add-contact-form">
    <form @submit.prevent="addContact">
      <h3>New contact:</h3>
      <input v-model.trim="name" type="text" placeholder="Name:" />

      <input v-model.trim="email" type="email" placeholder="E-mail:" />

      <input v-model.trim="phone" type="tel" placeholder="Phone:" />
      <div class="add-contact-form__btn-group">
        <button type="submit">Save</button>
        <button @click.prevent="cancelAdd">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: '',
    email: '',
    phone: '',
  }),
  methods: {
    addContact() {
      const contact = {
        name: this.name,
        'e-mail': this.email,
        phone: this.phone,
      };

      this.$store.commit('addContact', contact);
      this.cancelAdd();
    },
    cancelAdd() {
      this.name = this.email = this.phone = '';
      this.$emit('closeAddContactBlock');
    },
  },
};
</script>

<style lang="scss">
.add-contact-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 50px;
  border: 1px solid darkgray;
  border-radius: 10px;
  background-color: #fff;

  input {
    width: 100%;
    position: relative;
    margin-bottom: 10px;
    padding: 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid rgb(185, 178, 178);

    &:focus {
      border-bottom: 2px solid #000;
    }
  }

  &__btn-group {
    margin-top: 30px;

    button + button {
      margin-left: 20px;
    }
  }
}
</style>
