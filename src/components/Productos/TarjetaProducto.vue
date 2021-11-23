<template>
<div class="card">
    <img class="card-img-top" :src="producto.imagen" alt="Card image cap" />
    <div class="card-body">
        <h6>{{ producto.nombre }}</h6>
    </div>
    <ul class="list-group">
        <li class="list-group-item">Categoria: {{ producto.categoria }}</li>
        <li class="list-group-item">Peso: {{ producto.peso }}</li>
        <li class="list-group-item">Precio: ${{ producto.precio.toString().toLocaleLowerCase() }}</li>
        <li class="list-group-item">
            Descuento:
            {{ producto.oferta ? `${producto.descuento}% off` : 'Sin descuento' }}
        </li>
    </ul>
    <div class="card-actions">
        <button class="btn btn-info" @click="agregarProductoAlCarrito">Agregar al carrito</button>
    </div>
</div>
</template>

<script>
export default {
    props: {
        producto: {
            type: Object,
            required: true
        }
    },
    methods: {
        agregarProductoAlCarrito() {
            this.$store.dispatch('carrito/agregarProducto', this.producto)
        }
    }
}
</script>

<style lang="scss">
.card {
    text-align: center;
    border: none;
    width: 80vw;
    margin: 0 0 1vh 2vw;
    border-radius: 20px;

    @media (min-width: 992px) {
        width: 38vw;
        margin: 0 0 1vh 1vw;
    }

    @media (min-width: 1200px) {
        width: 20vw;
        margin: 0 0 1vh .5vw;
    }
}

.card-img-top {
    width: 80vw;
    height: 50vw;
    border-start-start-radius: 20px;
    border-start-end-radius: 20px;

    @media (min-width: 992px) {
        width: 38vw;
        height: 18vw;
    }

    @media (min-width: 1200px) {
        width: 20vw;
        height: 13vw;
    }
}

.card-body,
.list-group-item,
card-actions {
    border: 1px solid olive;
}

button {
    margin: 5px 0;
}
</style>
