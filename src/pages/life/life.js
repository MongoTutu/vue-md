export default {
    beforeCreate: function () {
        console.log('before init');
    },
    data: function () {
        console.log('init');
        return {
            msg: 'Life',
            title: 'Hello world'
        }
    },
    created: function () {
        console.log('after init');
    },
    mounted: function () {
        console.log('when dom & template is ok');
    },
    updated: function () {
        console.log('when data changes');
    },
    beforeDestroy: function () {
        console.log('========Before Destroy==========');
    },
    destroyed: function () {
        console.log('when this page destroyed');
    },
    methods: {
        con: function () {
            console.log(this.msg);
        }
    }
};