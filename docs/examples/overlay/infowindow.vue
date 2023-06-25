<template>
  <div>
    <label>
      <input type="checkbox" v-model="show" />
      文字内容infoWindow
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="show1" />
      动态内容infoWindow
    </label>
    <br />
    <label>
      <input type="checkbox" v-model="show2" />
      图文组合排版infoWindow
    </label>
    <br />
    <br />
    <BMap v-bind="$attrs" enableScrollWheelZoom>
      <BInfoWindow v-model:show="show" enableMaximize :position="{ lng: 116.404, lat: 39.925 }" title="文字内容">
        地址：北京市东城区王府井大街88号乐天银泰百货八层
        <template #maxContent>
          <h1>最大化内容</h1>
        </template>
      </BInfoWindow>
      <BInfoWindow v-model:show="show1" :position="{ lng: 116.404, lat: 39.925 }" title="动态内容">
        <h2>count: {{ count }}</h2>
        <button @click="count += 1">count++</button>
      </BInfoWindow>
      <BInfoWindow v-model:show="show2" :position="{ lng: 116.404, lat: 39.925 }" title="图文组合排版">
        <h2>天安门</h2>
        <div class="infoWindow-content">
          <p>天安门坐落在中国北京市中心，故宫的南侧，与天安门广场隔长安街相望，是清朝皇城的大门。..</p>
          <img width="139" height="104" src="https://lbs.baidu.com/jsdemo/img/tianAnMen.jpg" alt="" />
        </div>
      </BInfoWindow>
    </BMap>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  const show = ref<boolean>(false)
  const show1 = ref<boolean>(true)
  const show2 = ref<boolean>(false)
  const count = ref<number>(1)
</script>

<style scoped>
  button {
    border-radius: 6px;
    background: #ddd;
    outline: none;
    padding: 1px 5px;
    font-size: 14px;
    margin-bottom: 10px;
  }
  .infoWindow-content {
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .infoWindow-content p {
    margin: 0;
    line-height: initial;
  }
</style>
