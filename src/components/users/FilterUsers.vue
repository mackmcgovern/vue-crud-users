<template>
  <form @submit.prevent="searchUsers">
    <select v-model="selected" @change="searchUsers">
      <option value="all">View All Users</option>
      <option value="first_name">Filter by First Name</option>
      <option value="last_name">Filter by Last Name</option>
      <option value="email">Filter by Email</option>
    </select>
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search..."
        v-model.trim="filterInput"
        @input="searchUsers" />
    </div>
    <base-button mode="light">Search Users</base-button>
  </form>
</template>

<script>
export default {
  emits: ['filter-users'],
  data() {
    return {
      selected: 'all',
      filterInput: '',
    }
  },
  methods: {
    searchUsers() {
      const filterData = {
        selected: this.selected,
        filterInput: this.filterInput,
      }
      this.$emit('filter-users', filterData)
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input {
  width: 20rem;
  height: 40px;
}

select {
  height: 40px;
}
</style>
