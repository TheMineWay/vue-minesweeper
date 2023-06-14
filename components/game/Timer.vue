<script setup lang="ts">
import { intervalToDuration, formatDuration, addMilliseconds } from "date-fns";

defineProps<{ countFrom: Date }>();

const offset = ref<number>(0);

setInterval(() => {
  offset.value += 1000;
}, 1000);
</script>

<template>
  <div class="stats shadow">
    <div class="stat">
      <div class="stat-value">
        {{
          formatDuration(
            intervalToDuration({
              start: countFrom,
              end: addMilliseconds(countFrom, offset),
            }),
            { delimiter: ", " }
          )
        }}
      </div>
    </div>
  </div>
</template>
