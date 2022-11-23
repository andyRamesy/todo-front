<template>
  <a-breadcrumb v-for="(item, index) in items" :key="index">
    <a-breadcrumb-item v-if="item.url"
      ><router-link :to="`${item.url}`">{{
        item.label
      }}</router-link></a-breadcrumb-item
    >
    <div v-if="index < (items.length - 1)">|</div>
  </a-breadcrumb>
  <router-view />
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
