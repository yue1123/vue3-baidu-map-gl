# 成为 Vue3 BaiduMap GL 的赞助者 🙌

<br />
<br />
Vue3 BaiduMap GL 是采用 MIT 许可的开源项目，使用完全免费。

维护项目和开发新功能需要大量的时间和精力。如果您觉得该项目还不错，请不要吝啬您的大方，您的赞助就是支持作者持续更新，熬夜肝代码的最强动力！！

## 如何赞助

你可以通过微信赞赏码或者支付宝进行赞助，赞助后会在下面列表中显示赞助者信息。

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
<img width="300" v-if="activeKey === 'aliPay'" src="/aliPay.jpg" alt="">
<img width="300" v-else src="/weiCharPay.jpeg" alt="">

<script lang="ts" setup>
  import { ref } from 'vue'
  const activeKey = ref<'weiChatPay' | 'aliPay'>('weiChatPay')
</script>

## 当前赞助者

- 虚位以待...

<span style="font-size:12px">┭┮﹏┭┮，还没有小伙伴赞助，快抢沙发</span>
