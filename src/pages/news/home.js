import { mapState, mapMutations, mapGetters } from 'vuex'
import home from '../../api/index.js'

export default {
    beforeCreate: function () {

    },
    data: function () {
        return {
            first: false,
            second: false
        }
    },
    created: function () {
        home.weibo().then(res => {
            console.log(res);
        })
    },
    computed: {
        ...mapState({
            count: state => state.count
        }),
        ...mapGetters({

        })
    },
    methods: {
        ...mapMutations({
            add: 'adds'
        }),
        hello: function () {
            console.log('hello')
        }
    }
};