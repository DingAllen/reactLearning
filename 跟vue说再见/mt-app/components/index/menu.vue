<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <dd v-for="(item, idx) in menu" :key="idx">
        <i :class="item.type" />
        {{item.name}}
        <span class="arrow" />
      </dd>
    </dl>
    <div class="detail">
        <template v-for="">
            <h4>标题</h4>
            <span>1</span>
            <span>2</span>
            <span>3</span>
        </template>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      kind: '',
      menu: [
        {
          type: 'food',
          name: '美食'
        },
        {
          type: 'takeout',
          name: '外卖'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        },
        {
          type: 'hotel',
          name: '酒店'
        }
      ]
    }
  }
}
</script>

<style>
</style>
