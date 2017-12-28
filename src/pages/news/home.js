import { mapState, mapMutations, mapGetters } from 'vuex'

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
            add : 'adds'
        }),
        hello : function(){
            console.log('hello')
        }
    }
};