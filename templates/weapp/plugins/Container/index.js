// components/Container/index.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        bottomPadding: {
            type: String,
            value: '',
        },
        navBarOptions:{
            type:Object,
            value:{
                barTitleText: "自定义标题",
                barTitleTextColor: "#000000",
                scrollBarTitleText: "",
                scrollBarTitleTextColor:"",
                barTitleImage: "",
                scrollBarTitleImage: "",
                backgroundColor: "#ffffff",
                scrollBackgroundColor: "",
                frontColor: "#000000",//胶囊颜色 仅支持 #ffffff 和 #000000
                scrollFrontColor: "",
                homePath: "/pages/index/index",//首页路径
                triggerHeight: 200
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        navHeight: 0,
    },
    attached(){
      
    },
    pageLifetimes: {
        show(){
            this.createNav()
        },
        hide(){

        },
    },
    /**
     * 组件的方法列表
     */
    methods: {

        createNav() {
            let navHeight = this.selectComponent('#nav').init(this.properties.navBarOptions);
            this.setData({ navHeight });
            //返回给外部 高度 如果需要的话
            this.triggerEvent('getNavHeight',navHeight);
        },

        onPageScroll(scrollTop){
          
        },
    }
})
