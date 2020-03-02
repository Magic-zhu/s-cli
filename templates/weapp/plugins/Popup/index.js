// components/Popup/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    position:{
      type:String,
      value:'bottom'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    animation:null,
    style:"",
    show:false,
  },

  /**
   * 组件的方法列表
   */
  lifetimes:{
    attached() {
      let style;
      switch (this.properties.position){
        case "left":
          style = 'height:100%;left:0;top:0;transform:translateX(-100%)';
          break
        case "bottom":
          style = 'width:100%;bottom:0;transform:translateY(100%)';
          break
        case "right":
          style = 'height:100%;right:0;top:0;transform:translateX(100%)'; 
          break
        case "top":
          style = 'width:100%;top:0;transform:translateY(-100%)';
          break
      }
      this.setData({style});
    },
  },
  pageLifetimes:{
    show(){

    }
  },
  methods: {
    enter(){
      let ani = wx.createAnimation({
        duration:200,
      })
      switch (this.properties.position){
        case 'left':
          ani.translateX(0).step();
          break
        case 'bottom':
          ani.translateY(0).step();
          break
        case 'right':
          ani.translateX(0).step();
          break
        case 'top':
          ani.translateY(0).step();
          break
      }
      this.setData({ animation: ani.export()})
    },
    leave(){
      let ani = wx.createAnimation({
        duration:200,
      })
      switch (this.properties.position){
        case 'left':
          ani.translateX('-100%').step();
          break
        case 'bottom':
          ani.translateY('100%').step();
          break
        case 'right':
          ani.translateX('100%').step();
          break
        case 'top':
          ani.translateY('-100%').step();
          break
      }
      this.setData({ animation: ani.export()})
    },
    show(){
      this.setData({show:true});
      setTimeout(()=>{
        this.enter()
      },200)
    },
    hide(){
      this.leave();
      setTimeout(() => {
        this.setData({ show: false });
      }, 250)
    }
  }
})
