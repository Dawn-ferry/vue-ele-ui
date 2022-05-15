<template>
  <div id="app">
    <useReTable />
    <useReCard />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    useReTable: () => import('./components/useReTable.vue'),
    useReCard: () => import('./components/useReCard.vue')
  }
}
</script>

