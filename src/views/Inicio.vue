<template>
<div class="container-fluid">
    <BuscarProductos></BuscarProductos>
    <!-- <div class="row">
        <div class="col-sm mb-4 mb-md-0" v-for="(producto, $index) in $store.state.productos.todosLosProductos" :key="$index">
            <TarjetaProducto :producto="producto" class="mx-auto" />
        </div>
    </div> -->
</div>
</template>

<script>
import BuscarProductos from '../components/Productos/BuscarProductos.vue'
export default {
    components: {
        BuscarProductos
    },
}
</script>

<style>
h1 {
    text-align: center;
    margin-top: 0px
}
</style>
