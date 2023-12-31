<script setup lang="ts">
import { BoardCell } from "../../services/board/board-cell.service";

const props = defineProps<{
  cell: BoardCell;
  x: number;
  y: number;
  bombed: boolean;
  boardState: BoardCell[][];
}>();

const minesAround = computed(() =>
  props.cell.minesAround(props.boardState, props.x, props.y)
);

const minesAroundColor = computed(() => {
  switch (minesAround.value) {
    case 1:
      return "cyan";
    case 2:
      return "green";
    default:
      return "red";
  }
});
</script>

<template>
  <div
    :class="cell.isFlagged && !cell.isRevealed() && !bombed ? 'flagged' : ''"
  >
    <div v-if="bombed && cell.hasMine">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-emoji-expressionless-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm5 0h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm-5 4h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"
        />
      </svg>
    </div>
    <div v-else-if="cell.isRevealed()">
      <p v-if="minesAround === 0"></p>
      <p v-else :style="`color: ${minesAroundColor}`">{{ minesAround }}</p>
    </div>
    <svg
      v-else-if="cell.isFlagged"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-flag-fill flagged"
      viewBox="0 0 16 16"
    >
      <path
        d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"
      />
    </svg>
    <div v-else class="unrevealed"></div>
  </div>
</template>

<style scoped lang="postcss">
table.map {
  tr {
    td {
      div {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      div.unrevealed {
        background-color: var(--white);
        width: 2em;
        height: 2em;
      }
      div.flagged {
        background-color: red;
        width: 2em;
        height: 2em;
        color: var(--white);
      }
    }
  }
}
</style>
