<template>
<div class="card">
    <div class="row">
        <div class="col-md-4">
            <img :src="producto.imagen" class="carrito-imagen" />
        </div>
        <div class="col-md-8 px-3">
            <div class="card-block px-2">
                <h3 class="card-title">{{ producto.nombre }}</h3>
                <p class="card-text">Precio: ${{ producto.precio }}</p>
                <div class="row align-items-center">
                    <p class="card-text mb-0 mr-4">Cantidad: {{ producto.cantidad }}</p>
                    <div class="btn-group-vertical">
                        <button class="btn btn-info" @click="$store.dispatch('carrito/agregarProducto', producto)">
                            +
                        </button>
                        <button class="btn btn-info" @click="$store.dispatch('carrito/quitarProducto', producto)">
                            -
                        </button>
                    </div>
                </div>

                <p class="card-text">
                    Subtotal: ${{ (producto.cantidad * producto.precio).toLocaleString('de-DE') }}
                </p>
                <p class="card-text">
                    Total: ${{
              parseInt(
                producto.precio * (1 - producto.descuento / 100) * producto.cantidad
              ).toLocaleString('de-DE')
            }}
                </p>
                <!-- <a href="#" class="btn btn-primary">Read More</a> -->
            </div>
        </div>
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
    }
}
</script>

<style lang="scss" scoped>
.card * {
    text-align: right;
    font-size: 1rem;
    font-weight: 500;
}

.btn-group-vertical {
    padding-left: 20%;
    margin-bottom: 30px;
}

.card {
    height: 33vh;
    background-color: rgb(141, 151, 122);
    margin: 0 20px;
    display: inline-block;
    border-radius: 20px;
    border-style: none;
    box-shadow: 13px 13px 5px rgb(82, 82, 1);

    &:hover {
        box-shadow: 13px 13px 5px rgb(42, 42, 0);
        transform: scale(1.1);
        transition: .5s;
    }

    &:not( :hover) {
        transform: scale(1);
        transition: .5s;
    }
}

.carrito-imagen {
    width: 130px;
    height: 100px;
    border-top-left-radius: 18px;
}

.card-title {
    font-size: 1.5rem;
    font-weight: 600;
}
</style>
