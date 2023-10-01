<template>
  <!-- トップページ -->
  <div class="relative bg-cover h-[90vh] w-full" style="background-image: url('src/assets/top.jpg');">
    <div class="text-white text-center absolute w-full p-[40vh]">
      <h2 class="text-3xl mb-1">みんなが大切な家族</h2>
      <p class="text-base break-words mb-8">DoggyBuddyは、忙しくて愛犬のお世話が出来ない飼い主と
      <br>近くに住んでる愛犬家を繋ぐドッグシッターサービスです</p>
      <button class="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 m-4 rounded">シッターを探す</button>
      <button class="bg-emerald-500 hover:bg-emerald-600 text-white  py-2 px-6 m-4 rounded">シッターになる</button>
    </div>
  </div>

  <!-- サービス -->
  <div class="container mx-auto pb-14 text-[#727272]">
    <h2 class="text-3xl m-16 font-bold text-center">大切な愛犬と、近所の信頼できる愛犬家が繋がるサービス</h2>
    <div class="columns-3">
      <div class="w-full px-5">
        <p><font-awesome-icon :icon="['fas', 'calendar-alt']" /></p>
        <h6 class="text-lg font-bold pt-4">スケジュールを設定する</h6>
        <p class="pt-3">希望の曜日と時間を決めて、お互いのスケジュールに合わせて調整します</p>
      </div>

      <div class="w-full px-5">
        <p><i class="fas fa-house-user text-success fa-5x"></i></p>
        <h6 class="text-lg font-bold pt-4">信頼できる愛犬家とマッチング</h6>
        <p class="pt-3">愛犬家のプロフィールやレビューを閲覧して、あなたに合ったマッチングが出来ます</p>
      </div>

      <div class="w-full px-5">
        <p><i class="fas fa-camera text-success fa-5x"></i></p>
        <h6 class="text-lg font-bold pt-4">愛犬の様子を写真や動画で確認</h6>
        <p class="pt-3">サイト内で用意しているトークルームで、愛犬の様子や質問など気軽に連絡できます</p>
      </div>
    </div>

    <br>
    <hr class="mb-12">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import router from '../router'

export default defineComponent({
  name: 'TopPage',
})
</script>