// components/Modal/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    type: {
      type: String,
      value: 'success'
    },
    content: {
      type: String,
      value: "这里是内容"
    },
    confirmText: {
      type: String,
      value: "确定"
    },
    cancelText: {
      type: String,
      value: "关闭"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    visible: false,
    animation: null,
    animationBg: null,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    open() {
      this.setData({
        visible: true
      })
      let aniBg = wx.createAnimation({
        duration: 200
      })
      let rBg = aniBg.opacity(1).step().export();
      let ani = wx.createAnimation({
        duration: 200
      })
      let r = ani.scale(1).opacity(1).step().export();
      setTimeout(() => {
        this.setData({
          animation: r,
          animationBg: rBg
        })
      }, 200)
    },
    close() {
      let ani = wx.createAnimation({
        duration: 200
      })
      let r = ani.scale(1.2).opacity(0).step().export();
      let aniBg = wx.createAnimation({
        duration: 200
      })
      let rBg = aniBg.opacity(0).step().export();
      this.setData({
        animation: r,
        animationBg: rBg
      })
      setTimeout(() => {
        this.setData({
          visible: false,
        })
      }, 200)
    },
    confirm() {
      this.triggerEvent('confirm')
      this.close()
    },
    cancel() {
      this.triggerEvent('cancel')
      this.close()
    }
  }
})