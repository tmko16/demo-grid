// stores/songStore.ts
import { defineStore } from 'pinia';
import {Song} from "../types.ts";
import {computed, ref} from "vue";


export const useSongStore = defineStore('songStore', () => {
    const state = ref<Song[]>();
    const setState = (payload: Song[]) => {
        state.value = payload
    }
    const getState = computed(() => {
        return state.value
    })

    return {
        setState,
        getState
    }

});
