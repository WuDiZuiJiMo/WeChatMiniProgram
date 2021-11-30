Page({
  data: {
    title: '',
    items: [
      {
        title: '东风国际电影城',
        subTitle: '雨花台区华为路与宁双路交叉路口150米',
        tag: 'IMAX',
        price: '$10 起',
      },
      {
        title: '南京科技馆影城',
        subTitle: '雨花台区华为路与宁双路交叉路口150米',
        tag: 'IMAX',
        price: '$10 起',
      },
      {
        title: '喜满客影城',
        subTitle: '雨花台区华为路与宁双路交叉路口150米',
        tag: 'IMAX',
        price: '$10 起',
      },
      {
        title: '上影国际影城（万达店）',
        subTitle: '雨花台区华为路与宁双路交叉路口150米',
        tag: 'IMAX',
        price: '$10 起',
      },
      {
        title: '上影国际影城（彩虹汇店）',
        subTitle: '雨花台区华为路与宁双路交叉路口150米',
        tag: 'IMAX',
        price: '$10 起',
      },
    ],
  },

  onLoad: function (options) {
    var that = this
    return;
    //playingList
    wx.request({
      url: 'http://json.bmbstack.com/cinemaList',
      method: 'GET',
      data: {},
      header: {
        'Accept': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        that.data.items = res.data
      }
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '电影院'
    })
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
})
