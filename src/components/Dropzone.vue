<script setup lang="ts">
import { reactive, watch } from 'vue';
import { useDropzone } from 'vue3-dropzone';
import Papa from "papaparse";
import {Song} from "../types.ts";
import {useDataStore} from "../stores/tableStore.ts";
import fakeLoader from "../utils/fakeLoader.ts";

const state = reactive<{files: any}>({
  files: [],
});

const dataStore = useDataStore();
const onDrop = async  (acceptFiles: any,  ) =>  {
  state.files = acceptFiles;
  const file = acceptFiles[0];
  dataStore.setLoadingState({
    state: 'loading',
    percentage: 20
  })
  await fakeLoader(() => {
    dataStore.setLoadingState({
      state: 'loading',
      percentage: 60
    })
  }, 2000)
  await fakeLoader(() => {
    dataStore.setLoadingState({
      state: 'done',
      percentage: 100
    })
    if (file) {
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          const filtered = results.data.filter(item => (item as Song).title) as Song[];
          dataStore.setState(filtered);
        },
      });
    }
  }, 2000)

}

const { getRootProps, getInputProps, isDragActive } = useDropzone({
  onDrop,
});

function handleClickDeleteFile() {
  dataStore.clearState()
}
</script>

<template>
  <div>
    <div v-if="state.files.length > 0" class="files">
      <div class="file-item" v-for="(file, index) in state.files" :key="index">
        <span>{{ file.name }}</span>
        <span class="delete-file" @click="handleClickDeleteFile(index)"
        >Delete</span
        >
      </div>
    </div>
    <div v-else class="dropzone" v-bind="getRootProps()">
      <div
          class="border"
          :class="{
          isDragActive,
        }"
      >
        <input v-bind="getInputProps()" />
        <p v-if="isDragActive">Drop the files here ...</p>
        <p v-else>Drag and drop files here, or Click to select files</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropzone,
.files {
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
  rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  font-size: 12px;
  line-height: 1.5;
}

.border {
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  transition: all 0.3s ease;
  background: #fff;

  &.isDragActive {
    border: 2px dashed #ffb300;
    background: rgb(255 167 18 / 20%);
  }
}

.file-item {
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgb(255 167 18 / 20%);
  padding: 7px;
  padding-left: 15px;
  margin-top: 10px;

  &:first-child {
    margin-top: 0;
  }

  .delete-file {
    background: red;
    color: #fff;
    padding: 5px 10px;
    border-radius: 8px;
    cursor: pointer;
  }
}
</style>
