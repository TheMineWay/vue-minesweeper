<script lang="ts" setup>
import { Game } from "../services/game/game.service";

const game = ref<Game>();
</script>

<template>
  <div v-if="game" class="h-full">
    <Game />
  </div>
  <div v-else class="h-full">
    <NewGameModal :setGame="(_game: Game) => game = _game" />
    <div class="hero bg-base-200 h-full">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">
            {{ $t("main-page.intro-hero.Title") }}
          </h1>
          <p class="py-6">
            {{ $t("main-page.intro-hero.Description") }}
          </p>
          <button onclick="new_game_modal.showModal()" class="btn btn-primary">
            {{ $t("main-page.intro-hero.New-game") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
