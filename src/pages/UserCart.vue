<template>
  <section>
    <h2>Your Cart</h2>
    <h3>
      Total Amount:<base-design mode="green"> $ {{ cartTotal }} </base-design>
    </h3>
    <ul>
      <cart-item
        v-for="item in cart.items"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :price="item.price"
        :qty="item.qty"
        :image="item.image"
      ></cart-item>
    </ul>
  </section>
</template>

<script>
import CartItem from "../components/cart/CartItem.vue";
export default {
  components: {
    CartItem,
  },
  inject: ["cart"],
  computed: {
    cartTotal() {
      return this.cart.total.toFixed(2);
    },
  },
};
</script>

<style scoped>
section {
  max-width: 40rem;
  margin: 2rem auto;
}

h2 {
  text-align: center;
  border-bottom: 2px solid #ccc;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
