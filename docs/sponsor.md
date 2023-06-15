# 赞助作者 ☕️

<br />
<br />

维护和开发一个开源项目需要花费大量时间和精力。如果您觉得这个项目对您有所帮助，考虑用一杯咖啡的价格来鼓励和支持我们的工作。您的赞助将激励我们更加积极地更新和改进项目！

或者，给我们的项目点个 star ⭐️，这对于我们来说意义重大。这将有助于让更多的人知道我们的项目，增加项目的曝光度和受欢迎程度。

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
<div class="CardAnimation appear" style="display:inline-block" v-show="activeKey === 'aliPay'">
  <img width="300" src="/aliPay.jpg" alt="" style="border-radius: 12px;">
</div>
<div class="CardAnimation appear" style="display:inline-block" v-show="activeKey === 'weiChatPay'">
  <img width="300" style="border-radius: 12px;" src="/weiCharPay.jpg" alt="">
</div>

<script lang="ts" setup>
  import { ref } from 'vue'
  const activeKey = ref<'weiChatPay' | 'aliPay'>('weiChatPay')
</script>

## 当前赞助者

<!-- - 虚位以待... -->

- 友\*\*\_A &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 10¥
- Song 丶\*\*成眷 &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; 88.88¥

<!-- <span style="font-size:12px">┭┮﹏┭┮，还没有小伙伴赞助，快抢沙发</span> -->
