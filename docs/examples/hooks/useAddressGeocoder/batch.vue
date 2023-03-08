<template>
  <div>
    <BMap v-bind="$attrs" :zoom="13" center="合肥市" @initd="handleInitd">
      <BControl class="address-list" :offset="{ x: 10, y: 10 }">
        <ul>
          <li v-for="item in addressList" :key="item">{{ item }}</li>
        </ul>
      </BControl>
      <template v-if="!isLoading && !isEmpty">
        <template v-for="(item, index) in points">
          <BMarker :position="item"></BMarker>
          <BLabel style="color: #333; font-size: 9px" :position="item" :content="addressList[index]"></BLabel>
        </template>
      </template>
    </BMap>
  </div>
</template>
<script lang="ts" setup>
  import { useAddressGeocoder, Point } from 'vue3-baidu-map-gl'
  const addressList = [
    '包河区金寨路1号（金寨路与望江西路交叉口）',
    '庐阳区凤台路209号（凤台路与蒙城北路交叉口）',
    '蜀山区金寨路217号(近安医附院公交车站)',
    '蜀山区梅山路10号(近安徽饭店) ',
    '蜀山区 长丰南路159号铜锣湾广场312室',
    '合肥市寿春路93号钱柜星乐町KTV（逍遥津公园对面）',
    '庐阳区长江中路177号',
    
  ]
  const { get, point: points, isLoading, isEmpty } = useAddressGeocoder<BPoint[]>()

  function handleInitd() {
    get(addressList, '合肥市')
  }
</script>
<style>
  .address-list {
    color: #333;
    background-color: #fff;
    font-size: 10px;
    padding: 10px;
    border-radius: 8px;
    box-shadow: rgb(0 0 0 / 15%) 1px 2px 1px;
  }
  .address-list ul {
    margin: 0;
    padding: 0;
  }
  .address-list li {
    list-style: none;
    border-bottom: 1px solid #f1f1f1;
  }
</style>
