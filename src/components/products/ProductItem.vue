<template>
  <li class="product__">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <base-design mode="yellow">
          <h4>${{ price }}</h4>
        </base-design>
        <p>{{ description }}</p>
      </div>
    </div>

    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
export default {
  inject: ["addProductToCart"],
  props: ["id", "title", "description", "price", "image"],
  methods: {
    addToCart() {
      this.addProductToCart({
        id: this.id,
        image: this.image,
        title: this.title,
        price: this.price,
      });
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  width: 10rem;
  height: 10rem;
  object-fit: cover;
}

.product__text h3 {
  margin: 0 0 0 0.5rem;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #07404a;
  color: white;
  border: 1px solid #07404a;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #0d6d7e;
  border-color: #0d6d7e;
}
</style>
