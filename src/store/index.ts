import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { RootState } from './types';
import { fixtureState } from './fixture/index';

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
    state: {
        version: '1.0.0',
    },
    modules: {
        fixtureState,
    },
};

export default new Vuex.Store<RootState>(store);
