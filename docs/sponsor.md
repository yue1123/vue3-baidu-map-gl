# 成为 Vue3 BaiduMap GL 的赞助者 🙌

<br />
<br />
Vue3 BaiduMap GL 是采用 MIT 许可的开源项目，使用完全免费。

维护项目和开发新功能需要大量的时间和精力。如果您觉得该项目还不错，请作者喝杯咖啡 ☕️，您的赞助就是支持我们持续更新，熬夜肝代码的最强动力！！

## 如何赞助

您可以通过微信或者支付宝扫描下面二维码进行赞助，我们会在下面展示您的昵称信息（如果您介意展示，也可在留言中说明）。

非常感谢您的支持。

<label>
<input type="radio" v-model="activeKey" value="weiChatPay" name="pay-type">
微信
</label>

<label>
  <input type="radio" v-model="activeKey" value="aliPay" name="pay-type">
  支付宝
</label>
<br />
<br />
<img width="300" v-show="activeKey === 'aliPay'" src="/aliPay.jpg" alt="">
<img width="300" v-show="activeKey === 'weiChatPay'" src="/weiCharPay.jpeg" alt="">

<script lang="ts" setup>
  import { ref } from 'vue'
  const activeKey = ref<'weiChatPay' | 'aliPay'>('weiChatPay')
</script>

## 当前赞助者

<!-- - 虚位以待... -->

- 友\*\*\_A &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 10¥
- Song 丶\*\*成眷 &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 88.88¥

<!-- <span style="font-size:12px">┭┮﹏┭┮，还没有小伙伴赞助，快抢沙发</span> -->
