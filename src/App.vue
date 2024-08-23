<script setup lang="ts">
import { NLayout, NLayoutHeader, NLayoutSider, NH2, NLayoutFooter} from 'naive-ui'
import Dropzone from "./components/Dropzone.vue";
</script>

  <template>
    <div>
      <n-layout position="absolute">
        <n-layout-header style="height: 64px; padding: 24px" bordered>
         Table header
        </n-layout-header>
        <n-layout has-sider position="absolute" style="top: 64px; bottom: 64px">
          <n-layout-sider bordered content-style="padding: 24px;">
            Drop files here
            <dropzone></dropzone>
          </n-layout-sider>
          <n-layout content-style="padding: 24px;">
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
            <n-h2>Pingshan Road</n-h2>
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
