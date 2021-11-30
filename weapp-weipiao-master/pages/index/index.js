//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1200,
    bannerImages: [
      '../../image/banner/1.png',
      '../../image/banner/2.png',
      '../../image/banner/3.png',
    ],
    // 正在上映
    items: [
      {
        title: '影',
        subTitle: '动作 | 王大锤，王大锤',
        actor: '100分钟',
        image: 'https://img1.baidu.com/it/u=3001144109,4266486295&fm=26&fmt=auto',
        score: '9.0分',
        action: '购票',
      },
      {
        title: '速度与激情',
        subTitle: '动作 | 王大锤，王大锤',
        actor: '100分钟',
        image: 'https://img1.baidu.com/it/u=2772867788,1935390393&fm=26&fmt=auto&gp=0.jpg',
        score: '9.0分',
        action: '购票',
      },
      {
        title: '无双',
        subTitle: '动作 | 王大锤，王大锤',
        actor: '100分钟',
        image: 'https://img2.baidu.com/it/u=1345044667,815940613&fm=26&fmt=auto&gp=0.jpg',
        score: '9.0分',
        action: '购票',
      },
      {
        title: '盗墓笔记',
        subTitle: '动作 | 王大锤，王大锤',
        actor: '100分钟',
        image: 'https://img1.baidu.com/it/u=1554151599,1111913770&fm=26&fmt=auto&gp=0.jpg',
        score: '9.0分',
        action: '购票',
      },
      {
        title: '生化危机',
        subTitle: '动作 | 王大锤，王大锤',
        actor: '100分钟',
        image: 'https://img0.baidu.com/it/u=999330909,2651438772&fm=26&fmt=auto&gp=0.jpg',
        score: '9.0分',
        action: '购票',
      },
    ],
  },

  onLoad: function () {
    let _this = this
  },
  go: function (event) {
    wx.navigateTo({
      url: '../list/index?type=' + event.currentTarget.dataset.type
    })
  },

  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  handleClickAction: function () {
    wx.showToast({
      title: '还没有开发，敬请期待...',
      icon: 'none',
      duration: 1000
    })
  },

  jumpToMovies: function () {
    wx.navigateTo({
      url: '/pages/movie/index',
    })
  },
  jumpToSystemPage: function () {
    wx.navigateTo({
      url: '/pages/systeminfoPage/index',
    })
  },
})
