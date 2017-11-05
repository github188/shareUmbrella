// pages/QA/QA.js
Page({

  onLoad: function () {
  },

  agree: function (e) {
    // 不需要确认身份，Q&A List 呈现
    // Testing 后总结所有问题 汇总成文档



    // why can not navigate back??
    wx.navigateTo({
      url: '../../pages/Page1/page1',
    })
  },
})