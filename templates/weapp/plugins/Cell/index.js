// components/Cell/index.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    icon_left:{
      type:String,
    },
    icon_right:{
      type:String,
    },
    text_left:{
      type: String,
      value:"标题"
    },
    text_right:{
      type: String,
      value:"内容"
    },
    size:{
      type:"String",
      value:"normal"
    },
    custom:{
      type: "String",
    },
    customHover:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTap(e){
      this.triggerEvent('Tap',e);
    }
  }
})
