<template>
  <div class="fixtureDetailsContainer">
    <div v-if="fixture !== undefined">
      <h1>FixtureDetails</h1>
      <p>{{ fixture.name }}</p>
      <p>{{ fixture.model }}</p>

      <FixtureDetailsChannels :channels="fixture.channels"></FixtureDetailsChannels>

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action, State } from 'vuex-class';
import store from '../store/index';
import { FixtureState } from '../store/fixture/types';
import Fixture from '../backend/fixture'
import { IFixtureDefinition } from '../backend/types'
import  FixtureDetailsChannels from './FixtureDetailsChannels.vue'


@Component({
  components: {
    FixtureDetailsChannels,
  }
})
export default class FixtureDetails extends Vue {

private fixture!: IFixtureDefinition;

constructor() {
  super();
  this.fixture = {
    manufacturer: '',
    name: '',
    type: 0,
    channels: [],
    modes: []
  }
}

private async getFixture() {
  const response = await Fixture.getFixture();
  this.fixture = Object.assign(this.fixture, response);
  console.log(JSON.stringify(this.fixture));
}

private mounted() {
  this.getFixture();
}

}
</script>

<style scoped>
.fixtureDetailsContainer {
  background: rgb(64, 64, 64);
  color: rgba(255, 255, 255, 0.85);
  border-radius: 4px;
  border: 0.5px solid rgba(139, 139, 139, 0.25);
  min-width: 480px;
}
</style>
