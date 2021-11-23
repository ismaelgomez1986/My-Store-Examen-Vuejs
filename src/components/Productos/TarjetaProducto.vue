<template>
<div class="card">
    <img class="card-img-top" :src="producto.imagen" alt="Card image cap" />
    <div class="card-body">
        <h4>{{ producto.nombre }}</h4>
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

<style lang="scss" scoped>
.card {
    text-align: center;
    border-style: none;
    width: 80vw;
    margin: 0 0 1vh 2vw;
    border-radius: 20px;
    box-shadow: 12px 13px 10px rgb(66, 66, 0);

    &:hover {
        box-shadow: 20px 20px 5px rgb(39, 39, 0);
        transform: scale(1.05);
        border-style: none;
        transition: .7s;
    }

    &:not( :hover) {
        transform: scale(1);
        transition: .7s;
    }

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
    cursor: pointer;

    &:active {
        transform: scale(1.3);
        transition: .5s;
        border-radius: 15px;
    }

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
.card-actions {
    border: 2px solid rgb(109, 109, 2);
    background-color: rgb(141, 151, 122);

    &:hover {
        border: 2.2px solid rgb(77, 77, 1);
        transform: scale(1.1);
        font-size: 1.4rem;
        font-weight: 500;
        transition: .3s;
        border-radius: 10px;
    }
}

.card-actions {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
}

button {
    background-color: olive;
    border-style: none;

    &:hover {
width: 60%;
        padding: 12px 0;
        font-size: 1.2rem;
        background-color: olivedrab;
        box-shadow: 9px 9px 5px rgb(62, 87, 5);
    }

    margin: 10px 0;
}

.list-group,
.card-body {
    font-size: 1.1rem;
}
</style>
