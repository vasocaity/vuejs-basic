<template>
  <div>
    <hr/>
    Counter in Condition component: {{couter}}
    <div v-if="couter === 0">A</div>
    <div v-else-if="couter === 1">B</div>
    <div v-else-if="couter === 2">C</div>
    <div v-else>Not A/B/C</div>
    <h1 v-show="couter > 1">VARA</h1>
  </div>
</template>
<script>
export default {
  name: "Condition",
  props: ["couter"]
};
</script>

