<template>
<div class="center">
    <h1>Carrito de compras</h1>
    <br>
    <div class="row">
        <button class="btn btn-info purchase-button" @click="clickPagar">Comprar</button>
        <p>Total a Pagar: $ {{ $store.getters['carrito/totalTotal'] }}</p>
    </div>

    <Producto v-for="(producto, $index) in $store.state.carrito.todosLosProductos" :key="$index" :producto="producto" />
</div>
</template>

<script>
import Producto from '../components/Carrito/Producto.vue'

export default {
    components: {
        Producto
    },
    methods: {
        async clickPagar() {
            await this.$store.dispatch('carrito/comprar')
            alert('Compra procesada, muchas gracias por su preferencia!')
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.row>p {
    font-size: 1.6rem;
    font-weight: 500;
}

.center {
    margin-top: 20px;
    text-align: center;

}

.row {
    width: 80vw;
    margin: 20px auto 60px auto;
    vertical-align: middle;
}

div>p,
button {
    margin-left: 50px;
}

.purchase-button {
    width: 150px;

    &:hover {
        width: 170px;
        height: 60px;
        padding: 6px 0;
        font-size: 1.4rem;
        box-shadow: 9px 9px 5px rgb(25, 102, 10);
    }
}
</style>
