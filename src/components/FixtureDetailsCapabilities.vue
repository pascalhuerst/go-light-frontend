<template>
  <div class="fixtureDetailsCapabilitiesContainer">

    <table>
      <tr>
        <th>Index</th>
        <th>Value</th>
        <th>Min</th>
        <th>Max</th>
        <th>Color</th>
        <th>Res</th>
      </tr>

      <tr v-for="(capability, index) in capabilities" :key="capability.value">
        <td>{{ index }}</td>
        <td>{{ capability.value }}</td>
        <td>{{ capability.min }}</td>
        <td>{{ capability.max }}</td>
        <td>{{ capability.color }}</td>
        <td>{{ capability.res }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action, State } from 'vuex-class';
import store from '../store/index';
import { FixtureState } from '../store/fixture/types';
import Fixture from '../backend/fixture'
import { ICapability } from '../backend/types'

@Component
export default class FixtureDetailsCapabilities extends Vue {
@Prop(Array) private capabilities!: ICapability[];
}
</script>

<style scoped>
.fixtureDetailsCapabilitiesContainer {
  background: rgb(64, 64, 64);
  color: rgba(255, 255, 255, 0.85);
}

table {
  width: 100%;
}
/*
tr {
  border: solid 1px white;
}

td {
  border: solid 1px white;
}

th {
  border: solid 1px white;
}
*/
.title {
  background: black;
  font-size: 20pt;
}
</style>
