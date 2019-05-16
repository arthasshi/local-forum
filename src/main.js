import Vue from 'vue';
import {
  Button,
  Select,
  TextField,
  Paper,
  Tabs,
} from 'muse-ui';
import App from './App.vue';
import router from './router';
import store from './store';
// import 'muse-ui/lib/styles/base.less';
// import 'muse-ui/lib/styles/theme.less';
import 'muse-ui/dist/muse-ui.css';

Vue.use(Button);
Vue.use(Select);
Vue.use(TextField);
Vue.use(Paper);
Vue.use(Tabs);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
