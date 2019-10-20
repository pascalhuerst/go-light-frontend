import api from '@/backend/api'
import { faRss } from '@fortawesome/free-solid-svg-icons';
import { IFixtureDefinition } from './types'


export default {
    async getFixture() {
      console.log('Doing REST call....');
      try {
        const ret = await api().get('/fixture');
        return ret.data;
      } catch (error) {
        return '';
      }
    }
}