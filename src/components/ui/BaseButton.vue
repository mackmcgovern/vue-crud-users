<template>
  <button :class="mode" v-if="!link">
    <slot></slot>
  </button>
  <router-link :to="to" :class="mode" v-else>
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false,
      default: null,
    },
    link: {
      type: Boolean,
      required: false,
      default: false,
    },
    to: {
      type: String,
      required: false,
      default: '/',
    },
  },
}
</script>

<style scoped>
a {
  display: inline-block;
}

a,
button {
  font: inherit;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  color: white;
  border-radius: 5px;
  background-color: var(--primary-color);
  border: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 0 5px;
  cursor: pointer;
}

a:hover,
button:hover {
  filter: brightness(90%);
}

a.light,
button.light {
  background-color: var(--secondary-color);
}

a.delete,
button.delete {
  background-color: var(--accent-color);
}
</style>
