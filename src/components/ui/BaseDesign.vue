<template>
  <span class="design" :class="['design--' + mode]">
    <slot></slot>
  </span>
</template>

<script>
export default {
  props: ["mode"],
};
</script>

<style scoped>
.design {
  display: inline-block;
  padding: 0.15rem 1.25rem;
  background-color: #ccc;
  color: #292929;
  margin: 0 0.75rem;
  border-radius: 30px;
}

.design--yellow {
  background-color: #f0b800;
  color: black;
}

.design--green {
  background-color: #07404a;
  color: white;
}
</style>
