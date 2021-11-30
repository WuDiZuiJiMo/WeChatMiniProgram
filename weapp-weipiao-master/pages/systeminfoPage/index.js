//index.js
const app = getApp()
Page({
  data: {
    systemInfo: {},
  },

  onLoad: function () {
    var _this = this
    //
    wx.getSystemInfo({
      success: (result) => {
        console.log('result', result);
        _this.setData({ systemInfo: result });
      },
    })
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

})
