import axios from 'axios';
import _ from 'lodash';
import loadProgressBar from './helpers/progressBar';

window._ = _;
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

loadProgressBar(window.axios);
