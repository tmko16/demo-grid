<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutFooter, NProgress} from 'naive-ui'
import Dropzone from "./components/Dropzone.vue";
import DTable from "./components/DTable.vue";
import {useDataStore} from "./stores/tableStore.ts";
import {onBeforeMount} from "vue";

const {isStateEmpty, getLoadingState, clearState} = useDataStore()

onBeforeMount(() => {
  clearState()
})
</script>

  <template>
    <div>
      <n-layout position="absolute">
        <n-layout-header style="height: 64px; padding: 24px" bordered>
         Table header
          {{getLoadingState}}
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
          <n-layout-sider bordered content-style="padding: 24px;">
            Drop files here
            <dropzone></dropzone>
          </n-layout-sider>
          <n-layout content-style="padding: 24px;">
            <div v-if="isStateEmpty">
              <n-progress
                  v-if="getLoadingState.state === 'loading'"
                  type="line"
                  :percentage="getLoadingState.percentage"
                  indicator-placement="inside"
                  processing
              />
              <n-h2>Please drop csv file </n-h2>
            </div>

             <d-table v-else/>
          </n-layout>
        </n-layout>
        <n-layout-footer
            bordered
            position="absolute"
            style="height: 64px; padding: 24px"
        >
        </n-layout-footer>
      </n-layout>
    </div>
  </template>

<style scoped>

</style>
