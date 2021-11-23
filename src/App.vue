<template>
  <div>
    <Toolbar />
    <div class="container-fluid">
      <router-view />
    </div>
  </div>
</template>

<script>
import Toolbar from './components/App/Toolbar.vue'
export default {
  components: { Toolbar }
}
</script>
