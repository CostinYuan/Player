// pages/index/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        id: '1',
        title: 'CCTV-1高清',
        videoUrl: 'http://223.110.242.130:6610/gitv/live1/G_CCTV-1-HQ/1.m3u8'
      },
      {
        id: '2',
        title: 'CCTV-5Plus高清',
        videoUrl: 'http://223.110.242.130:6610/gitv/live1/G_CCTV-5PLUS-HQ/1.m3u8'
      },
      {
        id: '3',
        title: 'CCTV-9',
        videoUrl: 'http://223.110.242.130:6610/gitv/live1/G_CCTV-9/1.m3u8'
      },
      {
        id: '4',
        title: '星空卫视',
        videoUrl: 'http://116.199.5.51:8114/hls/Fsv_chan_hls_se_idx=233&FvSeid=1&Fsv_ctype=LIVES&Fsv_otype=1&Provider_id=0&Pcontent_id=8114.m3u8'
      },
      {
        id: '5',
        title: '凤凰资讯',
        videoUrl: 'http://117.169.120.138:8080/live/fhzixun/.m3u8'
      },
      {
        id: '6',
        title: 'AXN HD',
        videoUrl: 'http://pili-live-hdl.qhmywl.com/dsdtv/c762110b3eef8bcccce5863643dd66aa.m3u8'
      },
      {
        id:'7',
        title:'哆啦A梦',
        videoUrl:'http://aldirect.hls.huya.com/huyalive/29169025-2686220742-11537230236726853632-3048959612-10057-A-1524131613-1_1200.m3u8'
      },
      {
        id:'8',
        title:'蜡笔小新',
        videoUrl:'http://aldirect.hls.huya.com/huyalive/94525224-2503194318-10751137731343024128-2847699212-10057-A-0-1_1200.m3u8'
      },
      {
        id: '9',
        title: '海绵宝宝',
        videoUrl: 'https://aldirect.hls.huya.com/huyalive/29359996-2689614918-11551808111643721728-2847687648-10057-A-0-1_1200.m3u8'
      },
      {
        id: '10',
        title: '天线宝宝',
        videoUrl: 'http://cdn.adultiptv.net/gay.m3u8'
      },
      {
        id: '11',
        title: '漫威高清',
        videoUrl:'http://tx.hls.huya.com/huyalive/30765679-2504742278-10757786168918540288-3049003128-10057-A-0-1.m3u8'
      },
      {
        id: '12',
        title: '林正英系列',
        videoUrl: 'http://aldirect.hls.huya.com/huyalive/94525224-2460686034-10568566041753944064-2789274542-10057-A-0-1_1200.m3u8'
      },
    ],
    src:"",
    currentVideoBar:0 ,
  },
  playVideo: function (e) {
    this.videoCtx.stop()
    console.log(this)
    this.setData({currentVideoBar: e.currentTarget.dataset.id})
    this.setData({src: e.currentTarget.dataset.url})
    this.videoCtx.play()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.videoCtx=wx.createVideoContext('myVideo')
    // this.setData({src: this.data.list[0].videoUrl})
    // this.setData({currentVideoBar:1})
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})