import { defineStore } from "pinia";
import { ref } from "vue";
import type { Project } from "../interfaces/project.interface";

const incipiensPortat = ():Project[] => {
    
    return [
        {
            id: '1',
            nomen: 'Proiect 1',
            chores: []
        },
        {
            id: '2',
            nomen: 'Proiect 2',
            chores: []
        },
    ];
}

export const useProjectsStore = defineStore('projects', () =>{
    
    const projects = ref<Project[]>(incipiensPortat());
    
    return{
        projects,
    }
});