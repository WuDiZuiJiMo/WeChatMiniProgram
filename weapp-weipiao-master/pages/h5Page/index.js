Page({
  data: {
    address: ''
  },

  onLoad: function (options) {
    let _this = this;
    _this.setData({
      address: options.address
    })
  },

  onLoadError() {
    let _this = this;
  },
  onLoadSuc() {
    let _this = this;
  },

});