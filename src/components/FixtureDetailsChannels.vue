<template>
  <div class="fixtureDetailsChannelsContainer">
    <div class="title">Channels</div>
    <table>
      <tr>
        <th>Index</th>
        <th>Name</th>
        <th>Group Value</th>
        <th>Group Byte</th>
        <th>Capabilities</th>
      </tr>

      <tr v-for="(channel, index) in channels" :key="channel.name">
        <td>{{ index }}</td>
        <td>{{ channel.name }}</td>
        <td>{{ channel.group.value }}</td>
        <td>{{ channel.group.byte }}</td>
        <td>
          <FixtureDetailsCapabilities :capabilities="channel.capabilities"></FixtureDetailsCapabilities>
        </td>
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
import { IChannel } from '../backend/types'
import FixtureDetailsCapabilities from './FixtureDetailsCapabilities.vue'

@Component({
  components: {
    FixtureDetailsCapabilities,
  }
})
export default class FixtureDetailsChannels extends Vue {
@Prop(Array) private channels!: IChannel[];
}
</script>

<style scoped>
.fixtureDetailsChannelsContainer {
  background: rgb(64, 64, 64);
  color: rgba(255, 255, 255, 0.85);
}

table {
  border: solid 1px white;
  width: 100%;
}

tr {
  border: solid 1px white;
}

td {
  border: solid 1px white;
}

th {
  border: solid 1px white;
}

.title {
  background: black;
  font-size: 20pt;
}
</style>
