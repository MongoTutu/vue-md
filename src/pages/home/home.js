export default {
    beforeCreate: function () {
        
    },
    data: function () {
        return {
            msg: 'Life',
            title: 'Hello world',
            bar: 1
        }
    },
    created: function () {
        setTimeout(() => {
            this.bar = 0;
        }, 3000);
    },
    methods: {
        con: function () {
            
        }
    }
};