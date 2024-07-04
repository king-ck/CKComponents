// button.vue
<template>
    <button class="ea-button" :class="buttonStyle"><slot /></button>
</template>

<script lang="ts" setup>
import "./style/index.less";
import { computed } from "vue";
defineOptions({ name: "ck-button" });
type ButtonProps = {
    type?: string;
};
const buttonProps = defineProps<ButtonProps>();

const buttonStyle = computed(() => {
    console.log({ [`ea-button--${buttonProps.type}`]: buttonProps.type });
    return { [`ea-button--${buttonProps.type}`]: buttonProps.type };
});
</script>
