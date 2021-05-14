<template>
  <header>
    <h2><router-link to="/">VueShop</router-link></h2>

    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          <base-design mode="green">{{ cartQuantity }}</base-design>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>

    <div>
      <button v-if="!isLoggedIn" @click="login">Login</button>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.getters["cart/quantity"]; //cart is my namepace, quantity is the getter from cart.js
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10%;
  height: 5rem;
  background-color: white;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-self: center;
  margin: 0;
  padding: 0;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
}

a:hover,
a:active,
a.router-link-active {
  color: #304655;
  border-color: #304655;
}

button {
  font: inherit;
  cursor: pointer;
  border-radius: 30px;
  background-color: transparent;
  color: #07404a;
  border: 1px solid #07404a;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #70abb6;
}
</style>
