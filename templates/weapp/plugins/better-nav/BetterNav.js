// components/BetterNav/BetterNav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    backIcon: "./back.png",
    homeIcon: "./home.png",
    titleBarHeight: 0,
    barTitleText: "",
    scrollBarTitleText: "",
    barTitleTextColor: "",
    scrollBarTitleTextColor: "",
    barTitleImage: "",
    scrollBarTitleImage: "",
    backgroundColor: "#ffffff",
    scrollBackgroundColor: "",
    frontColor: "",//胶囊颜色 仅支持 #ffffff 和 #000000
    scrollFrontColor: "",
    homePath: "",//首页路径
    triggerHeight: 0,//触发高度
    showType: 0,//0 显示完整 1 只显示返回首页 2 都不显示
    status: false,
    opacity: 1,
    padding:0,//空隙值
    pix:0,//比值
    statusBarHeight:0,
  },
  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 初始化组件
     */
    init(options) {
      let system = wx.getSystemInfoSync();
      let pix = 750/system.windowWidth;
      let statusBarHeight = system.statusBarHeight;
      let padding = 6;
      if(system.model.indexOf('iPhone')==-1){
        //安卓
        padding = 8;
      }
      let navHeight;
      navHeight = 2*padding + statusBarHeight + 30;
      let pages = getCurrentPages();
      console.log("当前的页面栈:", pages, pages[0].route);
      let type = 0;
      options.homePath = options.homePath || '/pages/index/index'
      if ("/" + pages[0].route == options.homePath && pages.length < 2) {
        type = 2;
      }
      if ("/" + pages[0].route != options.homePath && pages.length < 2) {
        type = 1;
      }
      wx.setNavigationBarColor({
        frontColor: options.frontColor,
        backgroundColor: "transparent",
      })
      this.setData({
        barTitleText: options.barTitleText || '',
        scrollBarTitleText: options.scrollBarTitleText || '',
        barTitleTextColor: options.barTitleTextColor || '#000000',
        scrollBarTitleTextColor: options.scrollBarTitleTextColor || '',
        barTitleImage: options.barTitleImage || '',
        scrollBarTitleImage: options.scrollBarTitleImage || '',
        backgroundColor: options.backgroundColor || '#ffffff',
        scrollBackgroundColor: options.scrollBackgroundColor || '',
        frontColor: options.frontColor,//胶囊颜色 仅支持 #ffffff 和 #000000
        scrollFrontColor: options.scrollFrontColor || '',
        homeIcon: options.frontColor == '#000000' ? "./home.png" : "./home_white.png",
        backIcon: options.frontColor == '#000000' ? "./back.png" : "./back_white.png",
        homePath: options.homePath,//首页路径
        type,
        titleBarHeight: navHeight,
        triggerHeight: options.triggerHeight || 200,
        title: options.barTitleText,
        pix,
        padding,
        statusBarHeight,
      })
      return Math.floor(navHeight*pix)
    },
    /**
     * 改变状态
     */
    change(color) {
      this.setData({
        status: !this.data.status,
        homeIcon: color == '#000000' ? "./home.png" : "./home_white.png",
        backIcon: color == '#000000' ? "./back.png" : "./back_white.png",
        opacity: !this.data.status ? 1 : 0,
      })
      wx.setNavigationBarColor({
        frontColor: color,
        backgroundColor: "transparent",
      })
    },
    //返回首页
    goHome() {
      wx.vibrateShort();
      wx.switchTab({
        url: this.data.homePath,
        fail: (err) => {
          console.log(err)
        }
      })
    },
    //后退一页
    back() {
      wx.vibrateShort();
      wx.navigateBack({
        delta: 1
      })
    },
    handleSroll(e) {
      let { scrollTop } = e;
      if (scrollTop % 10 == 0) {
        if (!this.data.status) {
          let opacity = 100 - (scrollTop / this.data.triggerHeight * 100);
          opacity = opacity > 0 ? opacity / 100 : 0;
          this.setData({ opacity })
        }
        if (scrollTop > this.data.triggerHeight) {
          if (!this.data.status) {
            this.change("#ffffff");
          }
        } else {
          if (this.data.status) {
            this.change("#000000");
          }
        }
      }
    }
  }
})
