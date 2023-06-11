<script lang="ts" setup>
import { Game } from "../../services/game/game.service";

const props = defineProps<{
  game: Game;
}>();
</script>

<template>
  <h1>game</h1>
  <table class="map">
    <tr v-for="row of props.game.getBoard().getBoard()">
      <td v-for="cell of row">X</td>
    </tr>
  </table>
</template>
