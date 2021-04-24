<template>
  <h1>aaa</h1>
  <el-input
      v-model="entryInfoData.entry"
      @blur="init(entryInfoData.entry)"
      placeholder="请输入team_id"
      type="number"
  >
  </el-input>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue';
import {useStore} from "vuex";

export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const store = useStore();
    const entryInfoData = reactive({
      entry: 0
    })
    const init = (entry) => {
      console.info("entry:" + entry)
      store.dispatch('setEntryInfo', {entry: entry});
    };
    return {
      entryInfoData,
      init
    }
  }
});
</script>
