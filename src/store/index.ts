import {createStore} from 'vuex'
import {qryEntryInfoData} from '@/api/interface.ts';

export interface IEntryInfo {
    entry: number,
    entryName: string,
    playerName: string,
    region?: string,
    startedEvent?: number,
    overallPoints?: number,
    overallRank?: number,
    bank?: number,
    teamValue?: number,
    totalTransfers?: number,
}

const entryInfo: IEntryInfo = {
    entry: 0,
    entryName: "",
    playerName: ""
};

export default createStore({
    state: {
        entryInfo: entryInfo
    },
    getters: {},
    mutations: {
        setEntryInfo(state, entryInfo) {
            console.info(state);
            state.entryInfo = entryInfo;
        }
    },
    actions: {
        setEntryInfo({commit}, payload) {
            qryEntryInfoData(payload).then((res: any) => {
                console.log(res)
                commit('setEntryInfo');
            })
        }
    },
    modules: {}
})
