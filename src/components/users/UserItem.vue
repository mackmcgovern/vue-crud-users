<template>
  <li>
    <div class="user-info">
      <img :src="avatar" :alt="photoAlt" />
      <div>
        <h2>{{ fullName }}</h2>
        <h3>{{ email }}</h3>
      </div>
      <div class="btn-container">
        <base-button mode="light" @click="showEditor" v-if="!showUserEditor"
          >Edit User</base-button
        >
        <base-button mode="delete" @click="hideEditor" v-else
          >Cancel</base-button
        >
      </div>
    </div>
    <div v-if="showUserEditor">
      <edit-user
        :userAvatar="avatar"
        :userFirstName="firstName"
        :userLastName="lastName"
        :userEmail="email"
        :id="this.id"
        @closeForm="hideEditor"></edit-user>
    </div>
  </li>
</template>

<script>
import EditUser from './EditUser.vue'

export default {
  data() {
    return {
      showUserEditor: false,
    }
  },
  components: {
    EditUser,
  },
  props: ['avatar', 'photoAlt', 'firstName', 'lastName', 'email', 'id'],
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
  methods: {
    showEditor() {
      this.showUserEditor = true
    },
    hideEditor() {
      this.showUserEditor = false
    },
  },
}
</script>

<style scoped>
li {
  list-style: none;
  border: 1px solid #c5c4c4;
  padding: 1rem;
  /* width: 100%; */
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.user-info {
  display: flex;
  align-items: center;
  column-gap: 2rem;
}

img {
  border-radius: 50%;
  max-width: 128px;
  aspect-ratio: 1/1;
  object-fit: cover;
}

h2,
h3 {
  margin: 0;
}

h2 {
  color: #524c00;
}

h3 {
  color: #6f6f6f;
}

.btn {
  margin-left: auto;
}

.btn-container {
  row-gap: 8px;
  margin-left: auto;
}

@media only screen and (max-width: 800px) {
  .user-info {
    flex-direction: column;
    padding: 1rem 0;
    row-gap: 10px;
    justify-content: flex-end;
  }
  .btn-container {
    margin-top: 1rem;
  }
  h2,
  h3 {
    text-align: center;
  }
  .btn-container {
    margin-left: 0;
    margin: 10px auto 0 auto;
  }
}
</style>
