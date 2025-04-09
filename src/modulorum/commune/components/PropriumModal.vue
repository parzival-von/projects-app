<template>

<dialog class="modal" :open="aperta">
  <div class="modal-box">
    <div class="border-b border-blue-500 pb-5">
        <slot name="header"/>
    </div>
    <div class="my-5 ">
        <slot name="body"/>
    </div>
    <div class="border-t border-blue-500 pt-5">
        <slot name="footer"/>
    </div>
  </div>
</dialog>

<div v-if="aperta" class="fixed top-0 w-screen h-screen bg-black z-10 opacity-40"></div>


</template>


<script lang="ts" setup>
interface Props {
  aperta?: boolean;
  placeholder?: string;
  titulus?: string;
  subtitulus?: string;
}

withDefaults(defineProps<Props>(), {
  aperta: false,
  placeholder: 'Escribe un valor',
  titulus: 'Añade un nuevo Proyecto',
  subtitulus: 'Escribe el nombre al proyecto nuevo',
});


</script>