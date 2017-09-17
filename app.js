{
  // 网络请求超时设置
  "pages":[
    "pages/logs/logs",
    "pages/index/index"
  ],
  "tabBar": {
    "list": [{
      "pagePath": "pages/index/index",
      "text": "我的",
      "iconPath": "Image/icon_seo.png",
      "selectedIconPath":"Image/icon_seo_HL.png"
    }, {
      "pagePath": "pages/logs/logs",
      "text": "雨伞",
      "iconPath":"Image/icon_speed.png",
      "selectedIconPath":"Image/icon_speed_HL.png"
    }]
  },
  "networkTimeout": {
    "request": 10000,
    "downloadFile": 10000
  },
  "debug": true,
  "window":{
    "backgroundTextStyle":"light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle":"black",
    "backgroundColor":"#000000",
    // 下拉刷新
    "enablePullDownRefresh": true,
    // 上拉触底
    "onReachBottomDistance": 50
  }
}
