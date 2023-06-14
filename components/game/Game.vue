<script lang="ts" setup>
import { BoardCell } from "../../services/board/board-cell.service";
import { Game } from "../../services/game/game.service";

const props = defineProps<{
  game: Game;
}>();

const bombed = ref<boolean>(false);
const boardState = ref<BoardCell[][]>(props.game.getBoard().getBoard());

const stillRemaining = reactive(() =>
  boardState.value.some((r) => r.some((c) => !c.hasMine && !c.isRevealed()))
);

const onRevealCell = (x: number, y: number) => {
  if (bombed.value || !stillRemaining) return;
  const board = boardState.value;
  boardState.value = [...revealCell(board, x, y)];
};

const onFlagCell = (x: number, y: number) => {
  if (bombed.value || !stillRemaining) return;
  const board = boardState.value;
  const cell = board[x][y];
  if (cell.isRevealed()) return;

  cell.swapFlag();
  board[x][y] = cell;
  boardState.value = [...board];
};

const revealCell = (board: BoardCell[][], x: number, y: number) => {
  // Check if exists
  if (
    x < 0 ||
    y < 0 ||
    x >= board.length ||
    y >= board[x].length ||
    board[x][y].isRevealed()
  )
    return board;

  const cell = board[x][y];
  if (cell.hasMine) {
    // Mine found
    bombed.value = true;
    return board;
  }

  cell.reveal();

  if (cell.minesAround(board, x, y) === 0) {
    // Reveal around
    let nBoard = [...board];
    nBoard = revealCell(nBoard, x - 1, y + 1);
    nBoard = revealCell(nBoard, x + 1, y + 1);
    nBoard = revealCell(nBoard, x - 1, y - 1);
    nBoard = revealCell(nBoard, x + 1, y - 1);

    nBoard = revealCell(nBoard, x, y + 1);
    nBoard = revealCell(nBoard, x, y - 1);
    nBoard = revealCell(nBoard, x + 1, y);
    nBoard = revealCell(nBoard, x - 1, y);
  }

  board[x][y] = cell;
  return board;
};

const restart = () => {
  bombed.value = false;
  boardState.value = new Game(
    props.game.getBoard().getBoard().length,
    props.game.getBoard().getBoard()[0].length
  )
    .getBoard()
    .getBoard();
};
</script>

<template>
  <div class="flex justify-center content-center flex-col gap-4">
    <div v-if="!stillRemaining()">
      <h1 class="text-center">{{ $t("game.endgame.Win") }}</h1>
    </div>
    <div class="flex justify-center content-center">
      <table class="map">
        <tr v-for="(row, x) of boardState">
          <td
            v-for="(cell, y) of row"
            @click="() => onRevealCell(x, y)"
            @auxclick="() => onFlagCell(x, y)"
          >
            <GameCell
              :x="x"
              :y="y"
              :cell="cell"
              :boardState="boardState"
              :bombed="bombed"
            />
          </td>
        </tr>
      </table>
    </div>

    <div
      v-if="bombed || !stillRemaining()"
      class="flex justify-center content-center"
    >
      <button @click="restart" class="btn btn-primary">
        {{ $t("game.endgame.Restart") }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="postcss">
table.map {
  tr {
    td {
      width: 2em;
      height: 2em;
      border: 1px solid white;
    }
  }
}
</style>
