import {defineStore} from "pinia";
import {darkTheme, type GlobalTheme } from 'naive-ui'


interface IState {
    theme: null | GlobalTheme
}
export const useGlobalStore = defineStore('global',  {
    state: (): IState => ({
        theme: darkTheme
    })
})
