// stores/songStore.ts
import { defineStore } from 'pinia';
import {Song} from "../types.ts";
import {computed, ref} from "vue";

type LoadState = {
    state: 'idle' | 'loading' | 'error' | 'done',
    percentage : number
}
export const useDataStore = defineStore('dataStore', () => {
    const state = ref<Song[]>([]);
    const loadingState = ref<LoadState>({state: 'idle', percentage: 0})

    const clearState = () => {
        state.value = []
        setLoadingState({
            state: 'idle',
            percentage: 0
        })
    }

    const setState = (payload: Song[]) => {
        state.value = payload
    }
    const getState = computed(() => {
        return state.value
    })
    const getLoadingState = computed(() => loadingState.value)
    const setLoadingState = (payload: LoadState) => {
        loadingState.value = payload
    }

    const isStateEmpty = computed(() => {
        return  state.value?.length === 0;
    })

    return {
        setState,
        getState,
        clearState,
        setLoadingState,
        isStateEmpty,
        getLoadingState,
    }

});
