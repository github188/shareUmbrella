//pg1.js    
//获取应用实例    
var app = getApp()
Page({
  data: {




    movies: [
      { url:      'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' }
    ]
  },



  onLoad: function () {
  },



  // donate button function
  donate:function(e){
    //根据网络情况 通过Toast 告诉用户loading 的情况
    wx.showToast({
      title:'登录请求中',
      icon:'loading',
      //如果请求完了就hide，现在是fix time
      duration:10000
    })
    //
    wx.request({
    })
  },


  //rent button function
  rent: function (e) {
  // 1.判断是否是GPA会员

    //a.根据网络情况 通过Toast 告诉用户loading 的情况
    wx.showToast({
      title: '会员确认中',
      icon: 'loading',
      //如果请求完了就hide，现在是fix time
      duration: 10000
    })
    //b.请求数据库比对 -- 是否是GPA会员
    wx.request({
      url: 'https://api.gugujiankong.com/account/Login?email=' + this.data.email + '&password=' + this.data.password,
      header:{
        'Content-Type': 'application/json'
      },
      success: function(res){
        wx.hideToast();
        if (res.data.LoginStatus == 1){
          wx.showModal({
            title:'登录成功',
            content:'欢迎您使用GPA会员的 共享雨伞服务 即将为您跳转借伞界面：）',
            showCancel:false,
          });
          wx.redirectTo({
            url:'../../pages/rent/rent'
          });
          //登陆成功，是GPA会员
          // 2.开始借伞步骤
          // Ken





        } else{
          wx.showModal({
            title: '登录失败', 
            content: '您还不是GPA会员，请向公众号提交会员申请！', 
            showCancel: false,
            success: function(res){
              // 调回函数，回到主页
              wx.redirectTo({
                url:'../../pages/Page1/page1'
              })
            } });
        }
      }
    });
  },



  //return button function
  return_b: function (e) {
    // 不需要确认身份，直接换伞
    // Wu Shuang
  },


  //donate button function
  donate: function(e) {
    // 不需要确认身份，填写信息，直接捐伞
    // Darren
  },



  //FAQ button function
  FAQ: function(e) {
    // 不需要确认身份，Q&A List 呈现
    // Testing 后总结所有问题 汇总成文档
    wx.navigateTo({
      url:'../../pages/QA/QA'
    });
  },



})