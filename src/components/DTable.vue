
<template>
  {{songStore.getState}}
  <n-data-table
      :columns="cols"
      :data="songStore.getState"
      :bordered="false"
  />
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { NButton, NDataTable } from 'naive-ui';
import {useSongStore} from "../stores/tableStore.ts";



const songStore = useSongStore();

const cols = [
  {
    title: 'No',
    key: 'no',
  },
  {
    title: 'Title',
    key: 'title',
  },
  {
    title: 'Length',
    key: 'length',
  },
  {
    title: 'Action',
    key: 'actions',
    render() {
      return h(
          NButton,
          {
            strong: true,
            tertiary: true,
            size: 'small',
            onClick: () => console.log('test'),
          },
          { default: () => 'Play' }
      );
    },
  },
];
</script>

