// components/curtain/index.js
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
    animation_box:"",
    animation_bg:"",
    show:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close(){
        wx.vibrateShort();
        let animation = wx.createAnimation({
            duration: 200,
            timingFunction: 'liner',
            delay: 0,
            transformOrigin: '50% 50% 0'
        });
        this.setData({
            animation_bg:animation.opacity(0).step().export(),
            animation_box:animation.scale(1.2).opacity(0).step().export()
        })
        setTimeout(()=>{
            this.setData({show:false})
        },200)
    },
    show(){
        console.log('执行')
        let animation = wx.createAnimation({
            duration: 200,
            timingFunction: 'liner',
            delay: 0,
            transformOrigin: '50% 50% 0'
        });
        this.setData({
            show:true
        })
        setTimeout(()=>{
            this.setData({
                animation_bg:animation.opacity(1).step().export(),
                animation_box:animation.opacity(1).step().export()
            })
        },100)
    }
  }
})
