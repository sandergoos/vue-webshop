<template>
  <div class="container">
      <div class="row">
          <table class="table">
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Ammount</th>
                  <th>Individual price</th>
                  <th>Total price</th>
                  <th>&nbsp;</th>
              </tr>

              <tr v-for="(item, index) in cartItems" :key="index">
                  <td v-text="index + 1"></td>
                  <td v-text="item.name"></td>
                  <td>
                      <div class="fa fa-minus-square"></div>
                      {{ item.quantity }}
                      <div class="fa fa-plus-square"></div>
                  </td>
                  <td>&euro;{{ item.price }}</td>
                  <td>&euro;{{ item.price*item.quantity }}</td>
              </tr>
          </table>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems: function() {
      let items = [];

      for (var i = 0; i < this.$store.state.cart.length; i++) {
        const cartItem = this.$store.state.cart[i];
        const product = this.$store.state.products.find(
          p => p.id === cartItem.id
        );

        if (product) {
          product.quantity = cartItem.quantity;
          items.push(product);
        }
      }

      return items;
    }
  }
};
</script>

<style>

</style>
