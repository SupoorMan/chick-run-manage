<template>
  <div class="home">
    
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    
  },
})
export default class HomeView extends Vue {
  uname = "tom"

  mounted(){
    console.log(123+""+this.uname)
  }
}
</script>

<style lang="less" scoped>

</style>