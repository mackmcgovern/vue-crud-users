<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="email">Email: </label>
      <input type="email" id="email" name="email" v-model.trim="email" />
    </div>
    <div class="form-control">
      <label for="firstName">First name: </label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastName">Last name: </label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="avatar">User Photo URL: </label>
      <input type="text" id="avatar" name="avatar" v-model="avatar" />
    </div>
    <p v-if="!formIsValid" class="error">
      Please fill out the required fields before submitting.
    </p>
    <div class="btn-container">
      <base-button>Update User</base-button>
      <base-button mode="delete" type="button" @click="deleteUser"
        >Delete User</base-button
      >
    </div>
  </form>
</template>

<script>
export default {
  emits: ['closeForm'],
  props: ['userEmail', 'userFirstName', 'userLastName', 'userAvatar', 'id'],
  data() {
    return {
      email: this.userEmail,
      firstName: this.userFirstName,
      lastName: this.userLastName,
      avatar: this.userAvatar,
      formIsValid: true,
    }
  },
  methods: {
    validateForm() {
      if (this.email === '' || !this.email.includes('@')) {
        this.formIsValid = false
        return
      }
      if (this.firstName === '') {
        this.formIsValid = false
        return
      }
      if (this.lastName === '') {
        this.formIsValid = false
        return
      }
    },
    submitForm() {
      this.formIsValid = true
      this.validateForm()

      const generatedId = Date.now().toString(36)

      const formData = {
        id: this.id,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        avatar: this.avatar,
      }

      this.$store.dispatch('updateUser', formData)
      this.$emit('closeForm')
      this.$store.dispatch('fetchUsers')
    },
    deleteUser() {
      this.$store.dispatch('deleteUser', { id: this.id })
      this.$emit('closeForm')
    },
  },
}
</script>

<style scoped>
form {
  width: 100%;
}

.form-control {
  margin: 0.5rem 0;
}

input {
  width: 100%;
  height: 30px;
  margin: 2px 0 5px 0;
}

p.error {
  color: var(--accent-color);
}

@media only screen and (max-width: 800px) {
  .btn-container {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
}
</style>
