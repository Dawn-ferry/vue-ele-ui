<template>
  <div id="app">
    <useReTable />
  </div>
</template>

<script>

export default {
  name: 'App',
  components:{
    useReTable:()=>import('./components/useReTable.vue')
  }
}
</script>

