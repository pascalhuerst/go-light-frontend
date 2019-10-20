<template>
  <div id="app">
    <div class="container-fluid">
      <div class="row">
        <div id="mainView">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action, State } from 'vuex-class';

// import ConnectionSpinner from './components/ConnectionSpinner.vue';

@Component({
  components: {
  },
})

export default class App extends Vue {
}
</script>

<style>
html {
  background-color: rgb(20, 20, 20);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#app {
  background: rgb(20, 20, 20);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#mainView {
  padding-top: 55px;
  width: 100%;
  height: 100%;
}
</style>
