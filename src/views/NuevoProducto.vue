<template>
<div class="row justify-content-center">
    <div class="col-sm-6">
        <h3>Nuevo producto</h3>
        <form @submit.prevent="agregarNuevoProducto">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" minlength="4" maxlength="40" required v-model="producto.nombre" />
            </div>

            <div class="form-group">
                <label for="categoria">Categoria</label>
                <select name="categoria" id="categoria" class="form-control" required v-model="producto.categoria">
                    <option value="" selected disabled>Elija una opción</option>
                    <option value="dulce">Dulce</option>
                    <option value="salado">Salado</option>
                </select>
            </div>

            <div class="form-group">
                <label for="imagen">URL Imagen</label>
                <input type="text" class="form-control" id="imagen" name="imagen" required v-model="producto.imagen" />
            </div>

            <div class="form-group">
                <label for="precio">Precio</label>
                <input v-model.number="producto.precio" type="number" min="100" max="9999" step="100" class="form-control" id="precio" name="precio" required />
            </div>

            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="oferta" v-model="producto.oferta" />
                <label class="form-check-label" for="oferta"> Oferta </label>
            </div>

            <div class="form-group" v-if="producto.oferta">
                <label for="descuento">Descuento</label>
                <input type="number" class="form-control" id="descuento" name="descuento" required v-model.number="producto.descuento" min="0" max="99" step="1" />
            </div>

            <button class="btn btn-success product-create" type="submit">Crear producto</button>
        </form>
    </div>
</div>
</template>

<script>
export default {
    data: () => ({
        producto: {
            nombre: null,
            categoria: null,
            peso: null,
            precio: null,
            oferta: false,
            descuento: null,
            imagen: ''
        }
    }),
    methods: {
        agregarNuevoProducto() {
            this.$store.dispatch('productos/crearProducto', {
                ...this.producto
            })
            this.$router.push('/')
        }
    }
}
</script>

<style lang="scss" scoped>
.product-create {

    &:hover {
        width: 160px;
        padding: 6px 0;
        font-size: 1.3rem;
        box-shadow: 9px 9px 5px rgb(25, 102, 10);
    }

    margin: 10px 0;
}

.form-check-label {
    margin-left: 30px;
    margin-top: 50px;
}

.form-check {
    margin-bottom: 40px;
}

.justify-content-center {
    margin-top: 20px;
}

input,
select {
    box-shadow: 9px 9px 5px rgb(39, 56, 17);
    background-color: rgb(167, 167, 119);
    border-style: none;
}

.form-check-input {
    margin-top: 55px;
    width: 20px;
    height: 20px;
    background-color: rgb(167, 167, 119);
}

label {
  font-size: 1.3rem;
  font-weight: 500;
}
</style>
