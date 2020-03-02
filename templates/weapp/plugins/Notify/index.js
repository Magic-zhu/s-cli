// components/Notify/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    position: {
      type: String,
      value: "bottom"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,
    animation: null,
    bgColor: '',
    message: "这是通知",
    exist: false,
    needBlock: false,
    bottom:"-60rpx"
  },
  lifetimes: {
    attached() {
      let sys = wx.getSystemInfoSync();
      if (sys.model.indexOf('iPhone') != -1 && this.properties.position == 'bottom') {
        console.log(sys.model)
        if (
          sys.model.indexOf('iPhone 4') == -1 &&
          sys.model.indexOf('iPhone 5') == -1 &&
          sys.model.indexOf('iPhone 6') == -1 &&
          sys.model.indexOf('iPhone 7') == -1 &&
          sys.model.indexOf('iPhone 8') == -1
        ) {
          console.log('xxxx')
          this.setData({ needBlock: true ,bottom:"-100rpx"})
        }
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    success(message) {
      this.setData({
        show: true,
        bgColor: "#00db00",
        message,
      }, () => {
        this.enter()
      })
    },
    error(message) {
      this.setData({
        show: true,
        bgColor: "#ff2d2d",
        message,
      }, () => {
        this.enter()
      })
    },
    warning(message) {
      this.setData({
        show: true,
        bgColor: "#ffd306",
        message,
      }, () => {
        this.enter()
      })
    },
    info(message) {
      this.setData({
        show: true,
        bgColor: "#66ccff",
        message,
      }, () => {
        this.enter()
      })
    },
    custom(message, color) {
      this.setData({
        show: true,
        bgColor: color,
        message,
      }, () => {
        this.enter()
      })
    },
    enter() {
      if (this.data.exist) return
      let ani = wx.createAnimation({
        duration: 200
      })
      this.properties.position == 'top' ? ani.translateY('100%').step() : ani.translateY('-100%').step();;
      this.setData({
        animation: ani.export(),
        exist: true,
      })
      let timer = setTimeout(() => {
        let ani_leave = wx.createAnimation({
          duration: 200
        })
        this.properties.position == 'top' ? ani_leave.translateY('-100%').step() : ani_leave.translateY('100%').step();;
        this.setData({
          animation: ani_leave.export()
        }, () => {
          clearTimeout(timer);
          timer = null;
          setTimeout(() => {
            this.setData({
              show: false,
              exist: false,
            })
          }, 200)
        })
      }, 2000)
    }
  }
})
