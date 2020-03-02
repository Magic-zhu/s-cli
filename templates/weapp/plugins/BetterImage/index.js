// components/BetterImage/BetterImage.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width:{
      type: String,
      value: '750rpx'
    },
    height:{
      type: String,
      value: 'auto'
    },
    src:{
      type: String,
      value: ''
    },
    mode:{
      type: String,
      value: '',
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ready:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    loadImage(){
      this.setData({ready:true})
    }
  }
})
