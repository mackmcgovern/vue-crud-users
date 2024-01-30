<template>
  <base-card>
    <filter-users @filter-users="filterUsers"></filter-users>
  </base-card>
  <base-card>
    <h2>UserList</h2>
    <ul>
      <user-item
        v-for="user in filteredUsers"
        :key="user.id"
        :email="user.email"
        :firstName="user.first_name"
        :lastName="user.last_name"
        :avatar="user.avatar"
        :id="user.id">
        {{ user.first_name }}
      </user-item>
    </ul>
  </base-card>
</template>

<script>
import UserItem from '../components/users/UserItem.vue'
import FilterUsers from '../components/users/FilterUsers.vue'

export default {
  components: {
    UserItem,
    FilterUsers,
  },
  data() {
    return {
      selectedFilter: 'all',
      filterInput: '',
    }
  },
  computed: {
    filteredUsers() {
      const users = this.$store.getters['users']
      if (this.selectedFilter === 'first_name' && this.filterInput.length) {
        return users.filter(user =>
          user.first_name.toLowerCase().startsWith(this.filterInput)
        )
      }
      if (this.selectedFilter === 'last_name' && this.filterInput.length) {
        return users.filter(user =>
          user.last_name.toLowerCase().startsWith(this.filterInput)
        )
      }
      if (this.selectedFilter === 'email' && this.filterInput.length) {
        return users.filter(user =>
          user.email.toLowerCase().startsWith(this.filterInput)
        )
      }
      if (this.selectedFilter === 'all' && this.filterInput.length) {
        return users.filter(user => {
          if (user.first_name.toLowerCase().startsWith(this.filterInput)) {
            return true
          }
          if (user.last_name.toLowerCase().startsWith(this.filterInput)) {
            return true
          }
          if (user.last_name.toLowerCase().startsWith(this.filterInput)) {
            return true
          }
        })
      }

      return users
    },
  },
  methods: {
    setUsers() {
      this.$store.dispatch('fetchUsers')
    },
    filterUsers(filterData) {
      this.selectedFilter = filterData.selected
      this.filterInput = filterData.filterInput

      console.log(this.selectedFilter)
    },
  },
  created() {
    this.setUsers()
  },
}
</script>

<style scoped>
ul {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>
