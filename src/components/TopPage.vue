<template>
  <div class="relative bg-cover h-[90vh] w-full" style="background-image: url('src/assets/top.jpg');">
    <div class="text-white text-center absolute w-full p-[40vh]">
      <p class="text-3xl">みんなが大切な家族</p>
      <p class="text-base break-words">DoggyBuddyは、忙しくて愛犬のお世話が出来ない飼い主と
      <br>近くに住んでる愛犬家を繋ぐドッグシッターサービスです</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import router from '../router'

export default defineComponent({
  name: 'TopPage',
})
</script>