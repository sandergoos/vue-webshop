<template>
    <div class="product col-4">
        <h3 v-text="product.name"></h3>

        <img class="rounded img-fluid" src="/img/jas.jpg" />

        <div class="price">&euro;40,00</div>

        <p>Dit product is echt geweldig wauw..</p>

        <button class="btn btn-primary" @click="addToCart()">Add to cart</button>
    </div>
</template>

<script>
export default {
  name: "",
  data: function() {
    return {};
  },

  props: {
    product: {
      required: true
    }
  },

  methods: {
    addToCart: function() {
      this.$store.commit("addToCart", {
        id: this.product.id
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  padding: 10px;
}

.price {
  font-weight: bold;
}
</style>
