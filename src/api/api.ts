import axios from 'axios';

export default axios.create({
  baseURL: 'https://stapi.co/api/v1/rest/animal',
});
