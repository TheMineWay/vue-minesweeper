<script lang="ts" setup>
import { Game } from "../../services/game/game.service";

const props = defineProps<{
  game: Game;
}>();
</script>

<template>
  <div class="flex justify-center content-center">
    <table class="map">
      <tr v-for="row of props.game.getBoard().getBoard()">
        <td v-for="cell of row">{{ cell.hasMine ? "X" : "0" }}</td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table.map {
  border: 1px solid white;
}
</style>
