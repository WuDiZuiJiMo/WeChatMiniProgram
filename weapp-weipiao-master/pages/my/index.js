//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    userInfo: {},
    source: 'https://www.baidu.com/',
    userListInfo: [
      {
        icon: '../../image/iconfont-dingdan.png',
        text: '我的订单',
        isunread: true,
        unreadNum: 2
      }, {
        icon: '../../image/iconfont-card.png',
        text: '我的代金券',
        isunread: false,
        unreadNum: 2
      }, {
        icon: '../../image/iconfont-icontuan.png',
        text: '我的拼团',
        isunread: true,
        unreadNum: 1
      }, {
        icon: '../../image/iconfont-shouhuodizhi.png',
        text: '收货地址管理'
      }, {
        icon: '../../image/iconfont-kefu.png',
        text: '联系客服'
      }, {
        icon: '../../image/iconfont-help.png',
        text: '常见问题'
      }
    ]
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: '我的'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  handleClickAction: function () {
    wx.showToast({
      title: '想啥呢，当然是假的啦',
      icon: 'none',
      duration: 1000
    })
  },
})
