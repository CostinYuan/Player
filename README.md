# Player

基于微信小程序的播放器软件

- [x] 获取播放源
- [x] 点击后有选中样式



---------



选中样式代码：

```html
<view class='videoList'>
  <view class="{{currentVideoBar==item.id?'videoBar_light':'videoBar'}}" wx:for='{{list}}' data-url='{{item.videoUrl}}' data-id="{{item.id}}" bindtap='playVideo'>
    <image src="{{currentVideoBar==item.id?'/images/button-play-light.png':'/images/button-play.png'}}"></image>
    <text class="{{currentVideoBar==item.id?'body_light':'body'}}">{{item.title}}</text>
  </view>
</view>
```

