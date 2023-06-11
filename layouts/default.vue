<template>
  <div class="h-screen">
    <div class="flex flex-col h-screen">
      <div class="bg-gray-300"><Header /></div>
      <div class="flex-grow"><slot class="h-full" /></div>
    </div>
  </div>
</template>
