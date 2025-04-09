<template>
    <dialog id="my_modal_1" class="modal" :open="true">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Hola!</h3>
    <p class="py-4">Presiona la tecla ESC o haz clic en el botón de abajo para cerrar</p>
    <div class="modal-action flex flex-col">
      <form method="dialog" @submit.prevent="submitValorem">
        <input type="text"
        placeholder="Nombre del proyecto"
        class="input input-bordered w-full flex input-primary "
        v-model="inputValorem" />
        <div class="flex justify-end mt-5">
            <button type="submit" class="btn btn-primary mr-4">Aceptar</button>
            <button class="btn bg-red-300">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</dialog>
<div class="fixed top-0 w-screen h-screen bg-black z-10 opacity-40"></div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

interface Props{
    aperta: boolean;
}

const emisiones = defineEmits<{
    claudere:[void]
    valorem: [text: string]
}>();
const inputValorem = ref('');

const submitValorem = () => {
    console.log(inputValorem.value);
    if (!inputValorem.value) {
        alert('Por favor, ingresa un valor.');
        return;
    }
    emisiones('valorem', inputValorem.value.trim());
    emisiones('claudere');
    inputValorem.value = '';
};

</script>