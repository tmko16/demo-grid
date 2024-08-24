<script setup lang="ts">
import { NLayout,NFlex, NLayoutHeader, NIcon, NLayoutSider, NH2, NH1, NSpace,NSpin, NLayoutFooter, NProgress} from 'naive-ui'
import Dropzone from "./components/Dropzone.vue";
import DTable from "./components/DTable.vue";
import {useDataStore} from "./stores/tableStore.ts";
import {  DataArea24Filled } from '@vicons/fluent'
const { getLoadingState, } = useDataStore()


</script>
  <template>
    <div>
      <n-layout position="absolute">
        <n-layout-header style="height: 94px; padding: 24px" bordered>
       <n-flex justify="center">
         <n-h1>
           DEMO IMPORT
         </n-h1>
         <n-icon size="40">
           <DataArea24Filled />
         </n-icon>
       </n-flex>
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
          <n-layout-sider bordered content-style="padding: 24px;">
           <n-h2> Drop CSV file here</n-h2>
            <n-space  vertical>
              <dropzone style="width: 200px; margin-bottom: 20px" ></dropzone>
              <n-progress
                  v-if="getLoadingState.state === 'loading' || getLoadingState.state === 'done'"
                  type="line"
                  :percentage="getLoadingState.percentage"
                  indicator-placement="inside"
                  processing
              />
            </n-space>

          </n-layout-sider>
          <n-layout content-style="padding: 24px;" class="content">
            <n-spin content-class="spin" style="height: 100%" :show="getLoadingState.state === 'loading'">
              <d-table v-if="getLoadingState.state === 'done' || getLoadingState.state === 'idle'"/>
            </n-spin>
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
.spin {
  color: red;
}
</style>
