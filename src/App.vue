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
      products: [
        {
          id: "p1",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
          title: "Book Collection",
          description:
            "A collection of must-read books. All-time classics included!",
          price: 99.99,
        },
        {
          id: "p2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg",
          title: "Mountain Tent",
          description: "A tent for the ambitious outdoor tourist.",
          price: 129.99,
        },
        {
          id: "p3",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
          title: "Food Box",
          description: "The most delicious fruits, vegetables and superfood!",
          price: 6.99,
        },
      ],
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      products: this.products,
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
