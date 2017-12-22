<template>
  <div>
    <div class="greeting">Hello {{name}}</div>
    <button @click="handleClick">click</button>
  </div>
</template>
<script lang="ts">
  import Vue from 'vue'
  export default Vue.extend({
    data () {
      return {
        name: 'vue'
      }
    },
    methods: {
      handleClick (): void {
        console.log('click')
        this.name = 'typescript'
      }
    }
  })
</script>
<style lang="scss" scoped>
.greeting {
  font-size: 20px;
  color: #000;
}
button {
  border: none;
  padding: 10px;
}
</style>


