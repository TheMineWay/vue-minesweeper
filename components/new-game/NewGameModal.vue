<script lang="ts" setup>
import { Game } from "../../services/game/game.service";

const props = defineProps<{
  setGame: (game: Game) => void;
}>();

const width = ref(10);
const height = ref(10);

const startGame = () => {
  props.setGame(new Game(width.value, height.value));
};
</script>

<template>
  <dialog id="new_game_modal" class="modal modal-bottom sm:modal-middle">
    <div method="dialog" class="modal-box flex flex-col gap-4">
      <h3 class="font-bold text-lg">
        {{ $t("main-page.new-game-modal.Title") }}
      </h3>
      <div>
        <div class="flex flex-col gap-4">
          <div class="flex gap-4">
            <input
              type="number"
              v-model="height"
              :placeholder="$t('main-page.new-game-modal.form.Height')"
              class="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              v-model="width"
              :placeholder="$t('main-page.new-game-modal.form.Width')"
              class="input input-bordered w-full max-w-xs"
            />
          </div>
          <div class="w-full">
            <button @click="startGame" class="btn btn-primary w-full">
              {{ $t("main-page.new-game-modal.form.Start") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
