<template>
    <div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Proyectos</th>
        <th>Tareas</th>
        <th>Avance</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(project, index) in projectStore.projectList" :key="project.id" class="hover:bg-base-300">
        <th>{{ index +1 }}</th>
        <td>{{project.nomen}}</td>
        <td>{{project.chores.length}}</td>
        <progress class="progress progress-primary w-56" value="10" max="100"></progress>
      </tr>
    </tbody>
  </table>
</div>


<InputModal 
:aperta="modalAperta"
@claudere="modalAperta=false"
@valorem="projectStore.addereProject"
placeholder="Escribe el nombre del proyecto"
titulus="Añade un nuevo Proyecto"
subtitulus="Escribe el nombre al proyecto nuevo"
/>

<proprium-modal :aperta="propiumModalAperta">
  <template #header>
    <h1 class="text-3xl" >Título del modal</h1>
  </template>

  <template #body>
    <p class="text-2xl" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, in voluptatibus. Odit deleniti officia iusto tempore nihil. Cupiditate ad quia, error omnis provident nam quaerat voluptates! Voluptatibus hic ad reiciendis.</p>

  </template>

  <template #footer>
    <div class="flex justify-end">
      <button @click="propiumModalAperta=false" class="btn ">Cerrar</button>
      <button @click="propiumModalAperta=false" class="btn btn-primary ml-4">Aceptar</button>
    </div>
  </template>

</proprium-modal>

<fab-button @click="modalAperta = true">
  <AddCircle/>
  </fab-button>

  <fab-button @click="propiumModalAperta = true" positione="bottom-left">
  <ModalIcone/>
  </fab-button>

</template>
<script setup lang="ts">
import FabButton from '@/modulorum/commune/components/FabButton.vue';
import InputModal from '@/modulorum/commune/components/InputModal.vue';
import PropriumModal from '@/modulorum/commune/components/PropriumModal.vue';
import AddCircle from '@/modulorum/commune/icons/AddCircle.vue';
import ModalIcone from '@/modulorum/commune/icons/ModalIcone.vue';
import { ref } from 'vue';
import { useProjectsStore } from '../stores/projects.store';

const modalAperta = ref(false);

const propiumModalAperta = ref(true);

const projectStore = useProjectsStore();

</script>