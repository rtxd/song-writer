<template>
  <v-app>
    <v-main>
      <key-selector class="d-flex justify-end flex-space-between"/>
    </v-main>
  </v-app>
</template>

<script>
import KeySelector from './components/KeySelector.vue';

export default {
  name: 'App',
  components: {KeySelector},
};
</script>
