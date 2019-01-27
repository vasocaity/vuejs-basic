<template>
  <div>
    <form>
      <!-- Creates a two-way binding on a form input element or a component. -->
      <input v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
    </form>
  </div>
</template>
<script>
export default {
  name: "VModel",
  props: ["value"]
};
</script>
