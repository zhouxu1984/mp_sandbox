// index.js
Page({
  data:{
    wording: "xxx"
  },

  onclick: function(){
    this.setData({
      wording: "xuzhou"
    })
  },

  onLoad(options){
    console.log("小程序加载完成！");
  }
})
