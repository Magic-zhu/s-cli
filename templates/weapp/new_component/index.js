//Component Object
Component({
    properties: {
        myProperty:{
            type:String,
            value:'',
            observer: function(){}
        },

    },
    data: {

    },
    lifetimes:{
        attached: function () { },
        moved: function () { },
        detached: function () { },
    },
    pageLifetimes:{
        show: function () { },
        hide: function () { },
        resize: function () { },
    },
    methods: {
        
    },
});