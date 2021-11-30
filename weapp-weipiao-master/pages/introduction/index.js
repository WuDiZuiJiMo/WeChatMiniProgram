//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    locationImg: '../../image/location.png',
    location: '江苏省 南京市 雨花台区 华为路 118号',
    company: '小苹果公司',
    mail: '222000',
    phone: '18360577532',
    email: 'jeaa@sina.com',
    guanwang: 'https://www.apple.com.cn/shop/go/apple_com?cid=aos-cn-kwba-brand-bz&mnid=N2nnhxYV_mtid_18707vxu38484&mtid=18707vxu38484&aosid=p238',
  },

  onLoad: function () {
    let _this = this
  },

  // 拨打热线电话
  makePhoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: this.data.phone
    });
  },
  jumpGuanwang: function () {
    wx.navigateTo({
      url: '/pages/h5Page/index?address=' + this.data.guanwang,
    })
  }

})
