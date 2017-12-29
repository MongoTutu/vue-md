import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const URL = 'http://api.kstartup.cn';

export default {
    weibo : function(){
        var url = URL + '/weibo?token=123';
        return Vue.axios.get(url);
    }
}