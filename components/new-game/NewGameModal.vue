<template>
  <dialog id="new_game_modal" class="modal modal-bottom sm:modal-middle">
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg">
        {{ $t("main-page.new-game-modal.Title") }}
      </h3>
      <p class="py-4"></p>
    </form>
    <form method="dialog" class="modal-backdrop">
      <button>close</button>
    </form>
  </dialog>
</template>
