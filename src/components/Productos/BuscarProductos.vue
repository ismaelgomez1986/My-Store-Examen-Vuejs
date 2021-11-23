/* eslint-disable prettier/prettier */
<template>
<div>
    <h1>Todos los productos</h1>
    <hr />
    <div class="header">
        <h3>Buscar Productos</h3>
        <input type="text" v-model="producto" placeholder="Ingrese un nombre de producto, precio máximo o categoría" />
    </div>

    <div class="row">
        <div class="col-sm mb-4 mb-md-0" v-for="(item, $index) in productoDisponiblePorNombre(producto.toLowerCase())" :key="$index">
            <TarjetaProducto :producto="item" />
            <br />
        </div>
    </div>
</div>
</template>

<script>
import TarjetaProducto from './TarjetaProducto.vue'
import {
    mapGetters
} from 'vuex'
export default {
    name: 'buscar',
    data() {
        return {
            producto: ''
        }
    },
    components: {
        TarjetaProducto
    },

    computed: mapGetters('productos', ['productoDisponiblePorNombre'])
}
</script>

<style lang="scss" scoped>
h3,
input {
    display: inline-block;
    margin: 20px 1.5vw;
    border-radius: 5px;
}

h1 {
    font-size: 3rem;
    font-weight: 700;
}

h3 {
    font-size: 2rem;
}

input {
    width: 57vw;
    height: 40px;
    background-color: rgb(158, 168, 136);

    @media (max-width: 1005px) {
        width: 70vw;
    }
}

::placeholder {
    padding-left: 15px;
    color: rgb(59, 57, 57);
    font-size: 1.3rem;

    @media (max-width: 1024px) {
        font-size: 1.1rem;
    }
}

.header {
    margin: 0 0 50px 3vw;
    width: 88vw;
    background-color: olive;
    border-radius: 10px;
    box-shadow: 13px 13px 5px rgb(82, 82, 1);

    &:hover {
        size: 105%;
        box-shadow: 13px 13px 5px rgb(42, 42, 0);
        transition: .5s;
    }

    @media (max-width: 1005px) {
        width: 80vw;
    }
}

.row {
    text-align: center;
}

hr {
    border: 2px solid rgb(49, 71, 3);
    background-color:  rgb(49, 71, 3);
}
</style>
