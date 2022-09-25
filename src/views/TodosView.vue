<template>
  <div>
    <h1>{{test.name}}</h1>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    setup(){
        const test = reactive({
            name : "My name is Andy"
        })
        return {test}
    }
}
</script>

<style>

</style>