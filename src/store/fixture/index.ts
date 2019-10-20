import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { FixtureState } from './types';
import { RootState } from '../types';

export const state: FixtureState = {
  version: '0.0.1',
};

const namespaced: boolean = true;

export const fixtureState: Module<FixtureState, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations,
};
