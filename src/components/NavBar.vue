<template>
  <nav class="bg-white">
    <div class="flex items-center justify-between py-2 px-4 bg-white">
      <a href="/" class="text-success font-bold"><i class="fas fa-paw"></i> DoggyBuddy</a>
      <div class="lg:hidden">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="hidden lg:block">
        <ul class="flex space-x-4">
          <li><a href="/new_post_c_path" class="text-success">シッター利用者として投稿する</a></li>
          <li><a href="/new_post_sitter_path" class="text-success">シッターとして投稿する</a></li>
          <li><a href="/rooms_path" class="text-success"><i class="fas fa-paper-plane"></i></a></li>
          <li><a href="/notifications_path" class="text-success"><i class="fas fa-bell"></i></a></li>
          <li class="relative">
            <a href="#" class="text-white">
              <img src="/current_user.image.url" class="rounded-full border-2 border-green-400 h-9 w-9">
            </a>
            <div class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md overflow-hidden">
              <a href="/user_path(current_user)" class="block px-4 py-2 text-success">プロフィール</a>
              <a href="/edit_user_registration_path" class="block px-4 py-2 text-success">アカウントの編集</a>
              <a href="/destroy_user_session_path" class="block px-4 py-2 text-success">ログアウト</a>
            </div>
          </li>
          <li><a href="/sign_up" class="text-success">新規登録</a></li>
          <li><a href="/login" class="text-success">ログイン</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',

})
</script>