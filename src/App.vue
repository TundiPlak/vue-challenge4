<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from "./components/nav/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoggedIn: false,

      cart: { items: [], total: 0, qty: 0 },
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,

      cart: this.cart,
      login: this.login,
      logout: this.logout,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
    };
  },
  methods: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },

    addProductToCart(productData) {
      const productInCartIndex = this.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        this.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        this.cart.items.push(newItem);
      }
      this.cart.qty++;
      this.cart.total += productData.price;
    },
    removeProductFromCart(prodId) {
      const productInCartIndex = this.cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const selectedProd = this.cart.items[productInCartIndex];
      this.cart.items.splice(productInCartIndex, 1);
      this.cart.qty -= selectedProd.qty;
      this.cart.total -= selectedProd.price * selectedProd.qty;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;

  font: sans-serif;
}

html {
  font-family: "Yusei Magic", sans-serif;
}
</style>
