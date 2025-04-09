<template>
    <dialog id="my_modal_1" class="modal" :open="aperta">
  <div class="modal-box">
    <h3 class="text-lg font-bold">{{titulus}}</h3>
    <p class="py-4">{{subtitulus}}</p>
    <div class="modal-action flex flex-col">
      <form method="dialog" @submit.prevent="submitValorem">
        <input
        ref="inputRef"
        type="text"
        :placeholder="placeholder ?? 'Escribe un valor' "
        class="input input-bordered w-full flex input-primary "
        v-model="inputValorem"
        />

        <div class="flex justify-end mt-5">
            <button type="submit" class="btn btn-primary mr-4">Aceptar</button>
            <button @click="$emit('claudere')" class="btn bg-red-300">Cerrar</button>
        </div>
      </form>
    </div>
  </div>
</dialog>
<div v-if="aperta" class="fixed top-0 w-screen h-screen bg-black z-10 opacity-40"></div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

interface Props{
    aperta: boolean;
    placeholder?: string;
    titulus?: string;
    subtitulus?: string;
    
}

defineProps<Props>();

const emisiones = defineEmits<{
    claudere:[void]
    valorem: [text: string]
}>();
const inputValorem = ref('');

const inputRef = ref<HTMLInputElement | null>(null);

const submitValorem = () => {
    console.log(inputValorem.value);
    if (!inputValorem.value) {
        inputRef.value?.focus();
        // alert('Por favor, ingresa un valor.');
        return;
    }
    emisiones('valorem', inputValorem.value.trim());
    emisiones('claudere');
    inputValorem.value = '';
};

</script>