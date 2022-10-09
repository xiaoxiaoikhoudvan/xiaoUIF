<template>
  <div>
    <h1>Input 示例</h1>

    <Demo :component="InputValue" />
    <Demo :component="InputDisabled" />
    <Demo :component="InputReadOnly"></Demo>
    <Demo :component="InputError" />
  </div>
</template>
<script lang="ts">
import Demo from "./Demo.vue";
import InputValue from "./InputValue.vue";
import InputError from "./InputError.vue";
import InputDisabled from "./InputDisabled.vue";
import InputReadOnly from "./InputReadOnly.vue";

export default {
  components: { Demo },
  setup() {
    return {
      InputValue,
      InputError,
      InputDisabled,
      InputReadOnly,
    };
  },
};
</script>
