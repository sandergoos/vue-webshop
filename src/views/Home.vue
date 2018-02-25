<template>
  <div class="container">
    <div class="row">
      <webshop-list-item :product="item"
      v-for="(item, index) in products" 
      :key="index" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import WebshopListItem from '@/components/WebshopListItem';

export default {
  name: "home",

  data: function () {
    return {
      products: ['p1', 'p2', 'p3']
    }
  },

  components: {
    WebshopListItem
  }
};
</script>
