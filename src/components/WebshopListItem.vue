<template>
    <div class="product col-4">
        <h3 v-text="product"></h3>

        <img class="rounded img-fluid" src="/img/jas.jpg" />

        <div class="price">&euro;40,00</div>

        <p>Dit product is echt geweldig wauw..</p>

        <button class="btn btn-primary">Add to cart</button>
    </div>
</template>

<script>
export default {
    name: "",
    data: function () {
        return { 

        }
    },

    props: {
        product: {
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>

.product {
    padding: 10px;
}

.price {
    font-weight: bold;
}

</style>