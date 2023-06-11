<script lang="ts" setup>
import { Game } from "../../services/game/game.service";

const props = defineProps<{
  game: Game;
}>();

const onPressCell = (x: number, y: number) => {
  console.log({ x, y });
};
</script>

<template>
  <div class="flex justify-center content-center">
    <table class="map">
      <tr v-for="(row, x) of props.game.getBoard().getBoard()">
        <td v-for="(cell, y) of row" @click="() => onPressCell(x, y)">
          {{ cell.hasMine ? "X" : "0" }}
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
table.map {
  tr {
    td {
      padding: 10px;
      border: 1px solid white;
    }
  }
}
</style>
