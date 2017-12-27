import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Components from './components/index.js'

Vue.use(VueMaterial)

Vue.config.productionTip = false

sessionStorage.navctrl = 'root';

router.beforeEach((to, from, next) => {
    var navctrl = sessionStorage.navctrl.split(',');
    if (to.path == navctrl[navctrl.length - 2]) {
        router.goBack = 1;
        navctrl.pop();
    } else {
        router.goBack = 0;
        navctrl.push(to.path);
    }
    sessionStorage.navctrl = navctrl.toString();

    next();
})

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
