
<template>
  <n-data-table
      :columns="cols"
      :data="getState"
      :bordered="false"
  />
</template>

<script lang="ts" setup>
import { h } from 'vue';
import { NButton, NDataTable } from 'naive-ui';
import {useDataStore} from "../stores/tableStore.ts";



const store = useDataStore();
const {getState} = store

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
          },
          { default: () => 'Do something' }
      );
    },
  },
];
</script>

