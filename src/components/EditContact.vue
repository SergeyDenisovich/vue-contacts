<template>
  <div>
    <h3>Edit contact</h3>
    <div class="edit-contact-form">
      <form @submit.prevent="updateContact()">
        <div v-for="(value, key) in contact" :key="key">
          <div v-if="key !== 'id'">
            <label>{{ key }}:</label>
            <input type="text" v-model="contact[key]" required />
            <span class="edit-contact-form__delete-btn" @click.prevent="deleteField(key)">&times;</span>
          </div>
        </div>

        <p>
          <button v-if="!addedField" @click.prevent="addField">Add field</button>
        </p>

        <div v-show="addedField">
          <h4>New field:</h4>
          <input type="text" v-model="addedFieldData.key" placeholder="Enter field name" />

          <input type="text" v-model="addedFieldData.value" placeholder="Enter field value" />
        </div>

        <div class="edit-contact-form__controls">
          <button type="submit">Save</button>
          <button v-if="!isCancel" @click.prevent.stop="cancelUpdate">Cancel edit</button>
          <button @click.prevent.stop="closeEditForm">Close edit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    id: null,
    contacts: [],
    prevContactDataState: {},
    addedField: false,
    addedFieldData: {
      key: '',
      value: '',
    },
  }),
  created() {
    this.contacts = this.$store.getters.getContactsCopy;
    this.id = Number(this.$route.params.id);
    this.prevContactDataState = this.$store.getters.getNonEditContacts.find(
      (contact) => Number(contact.id) === Number(this.id)
    );
  },
  computed: {
    contact() {
      return this.contacts.find((contact) => Number(contact.id) === Number(this.id));
    },
    isCancel() {
      return Object.keys(this.prevContactDataState).length === Object.keys(this.contact).length && !this.isFieldEmpty();
    },
  },
  methods: {
    updateContact() {
      if (this.addedFieldData.key !== '' && this.addedFieldData.value !== '') {
        this.$set(this.contact, this.addedFieldData.key, this.addedFieldData.value);
      }

      this.$store.commit('updateContact', this.contact);

      this.addedField = false;
      this.addedFieldData.key = this.addedFieldData.value = '';
    },
    cancelUpdate() {
      if (confirm(`Отменить редактирование контакта ${this.contact.name.toUpperCase()}?`)) {
        this.$store.commit('updateContact', this.prevContactDataState);
        this.addedField = false;
        this.$emit('closeUpdateForm');
      }
    },
    addField() {
      this.addedField = true;
    },
    closeEditForm() {
      if (!this.isFieldEmpty()) {
        this.$emit('closeUpdateForm');
      } else {
        let emptyField = Object.keys(this.contact).filter((key) => this.contact[key] === '');
        alert(`Заполните поля ${emptyField} или отмените редактирование данного контакта`);
      }
    },
    deleteField(key) {
      if (confirm(`Удалить поле ${key}?`)) {
        this.$delete(this.contact, key);

        this.$store.commit('updateContact', this.contact);
      }
    },
    isFieldEmpty() {
      return Object.values(this.contact).some((field) => field === '');
    },
  },
};
</script>

<style lang="scss" scoped>
.edit-contact-form {
  max-width: 600px;
  margin: 20px auto;
  padding: 50px;
  border: 1px solid #a9a9a9;
  border-radius: 10px;
  background-color: #fff;

  form > div {
    position: relative;
  }

  form > p {
    display: flex;
    justify-content: start;
  }

  label {
    text-transform: uppercase;
    font-weight: bold;
  }

  input {
    width: 100%;
    position: relative;
    margin-bottom: 10px;
    padding: 5px;
    border: none;
    outline: none;
    border-bottom: 1px solid #b9b2b2;

    &:focus {
      border-bottom: 2px solid #000;
    }
  }

  &__delete-btn {
    position: absolute;
    padding: 5px;
    top: 0;
    right: 0;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #ff0000;
      color: #fff;
    }
  }

  &__controls {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
