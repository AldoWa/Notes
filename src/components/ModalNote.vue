<template>
  <div class="bg-[#000] fixed top-0 right-0 w-full h-full bg-opacity-50 flex items-center justify-center">
    <div class="bg-slate-700 w-[640px] h-[600px] flex flex-col justify-between rounded-md">
      <div class="p-4 relative">
        <div class="flex justify-between">
          <h2 class="text-slate-200">Adicionar nota</h2>
          <button class="w-8 h-8 bg-slate-800 text-slate-500 rounded-tr-md absolute top-0 right-0">X</button>
        </div>
        <span class="mt-3 block text-slate-400">Comece <span class="text-lime-400">gravando uma nota</span> ou se preferir <span class="text-lime-400">utilize apenas texto</span></span>
      </div>
      <button class="w-full bg-lime-400
        text-sm
        leading-[14px]
        py-4
        text-[#1A2E05]
        font-semibold
        rounded-b-md
      ">Salvar nota</button>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
