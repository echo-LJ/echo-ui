<template>
  <div>
    <div class="sidebar-selectable-list-demo-body">
      <sidebar-selectable-list :items="items" :selected="selectedItems"></sidebar-selectable-list>
    </div>
    <div class="sidebar-selectable-list-selected">
      <span>已选项的 index ：</span>
      <span>{{ selectedItems }}</span>
    </div>
  </div>
</template>

<script>
import sidebarSelectableList from '../../components/sidebarSelectableList/SidebarSelectableList'
export default {
  name: 'sidebarSelectableListDemo',
  data () {
    return {
      items: [
        {
          label: '第零项',
          value: 0
        },
        {
          label: '第一项',
          value: 1
        },
        {
          label: '第二项',
          value: 2
        },
        {
          label: '第三项',
          value: 3
        },
        {
          label: '第四项',
          value: 4
        },
        {
          label: '第五项',
          value: 5
        },
        {
          label: '第六项',
          value: 6
        },
        {
          label: '第七项',
          value: 7,
          disabled: true
        },
        {
          label: '第八项',
          value: 8,
          disabled: false
        }
      ],
      selectedItems: []
    }
  },
  components: {
    sidebarSelectableList
  },
  created () {
  },
  methods: {
  }
}
</script>

<style src="./sidebarSelectableList.less" lang="less"></style>
