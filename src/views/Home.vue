<template>
  <div class="home">
    <SimpleMapExplorer/>
  </div>
</template>

<script>
// @ is an alias to /src
import MapExplorer from '@/components/MapExplorer.vue'
import SimpleMapExplorer from '@/components/SimpleMapExplorer.vue'

export default {
  name: 'Home',
  components: {
    MapExplorer,
    SimpleMapExplorer
  }
}
</script>
