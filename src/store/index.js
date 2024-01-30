import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      users: [],
    }
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload
      console.log(state.users)
    },
    updateUsers(state, payload) {
      state.users = state.users.map(user => {
        if (user.id === payload.id) {
          return {
            ...payload,
          }
        } else return user
      })
    },
  },
  actions: {
    async fetchUsers(context) {
      const res = await fetch(`https://reqres.in/api/users`)
      const resData = await res.json()
      if (!res.ok) {
        const error = new Error(resData.message) || 'Failed to retrieve data'
        console.log(error)
        throw error
      }
      const users = [...resData.data]

      context.commit('setUsers', users)
    },
    async updateUser(context, payload) {
      const updatedUser = {
        id: payload.id,
        email: payload.email,
        first_name: payload.firstName,
        last_name: payload.lastName,
        avatar: payload.avatar,
      }

      const users = { ...context.getters['users'] }

      const usersArr = []
      for (const key in users) {
        const user = { ...users[key] }
        usersArr.push(user)
      }

      context.commit('setUsers', usersArr)

      console.log(updatedUser)
      console.log(JSON.stringify(updatedUser))

      const res = await fetch(`https://reqres.in/api/users/${payload.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      })

      const resData = await res.json()
      console.log(resData)

      if (!res.ok) {
        const error = new Error('Something went wrong')
        throw error
      }

      context.commit('updateUsers', updatedUser)
    },
    async deleteUser(context, payload) {
      const res = await fetch(`https://reqres.in/api/users/${payload.id}`, {
        method: 'DELETE',
      })

      const resData = await res.json()
      console.log(resData)

      if (!res.ok) {
        const error = new Error('Something went wrong')
        throw error
      }
    },
  },
  getters: {
    users(state) {
      return state.users
    },
  },
})

export default store
