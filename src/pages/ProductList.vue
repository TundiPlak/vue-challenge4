<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :price="prod.price"
        :description="prod.description"
        :image="prod.image"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from "../components/products/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters["prods/products"];
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  max-width: 40rem;
  padding: 0;
  margin: 2rem auto;
}
</style>
