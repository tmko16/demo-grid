<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NH2, NLayoutFooter, NProgress} from 'naive-ui'
import Dropzone from "./components/Dropzone.vue";
import DTable from "./components/DTable.vue";
import {useDataStore} from "./stores/tableStore.ts";

const { getLoadingState, } = useDataStore()


</script>

  <template>
    <div>
      <n-layout position="absolute">
        <n-layout-header style="height: 64px; padding: 24px" bordered>
         Table header
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
          <n-layout-sider bordered content-style="padding: 24px;">
            Drop CSV file here
            <dropzone></dropzone>
          </n-layout-sider>
          <n-layout content-style="padding: 24px;">
              <n-progress
                  v-if="getLoadingState.state === 'loading'"
                  type="line"
                  :percentage="getLoadingState.percentage"
                  indicator-placement="inside"
                  processing
              />
             <d-table v-if="getLoadingState.state === 'done' || getLoadingState.state === 'idle'"/>
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
