import Vue from 'vue'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        loader: false,
        ProfileAccess: [],
        ProfileEditAccess: [],
        DSALead: [1, 2, 8, 9, 15],
        DSACaptain: [1, 2, 8, 9, 15, 17],
        DSAAccess: [1, 2, 8, 9, 15, 17, 18],
        DVALead: [1, 2, 8, 9, 13, 16],
        DVAAccess: [1, 2, 8, 9, 13, 16, 21, 22, 23],
        HRMAccess: [1, 2, 6, 7, 8, 9],
        FSLLead: [1, 2, 8, 9, 11],
        FSLAccess: [1, 2, 8, 9, 11, 14, 19],
        authRole: parseInt(localStorage.getItem('role')),
        api_token: localStorage.getItem('api_token'),
    },
    getters: {
        getProfileAccess: state => state.ProfileAccess,
        getProfileEditAccess: state => state.ProfileEditAccess,
        verifyDSALead: state => state.DSALead.includes(state.authRole),
        verifyFSLLead: state => state.FSLLead.includes(state.authRole),
        verifyDSAAccess: state => state.DSAAccess.includes(state.authRole) && state.api_token,
        verifyDVAAccess: state => state.DVAAccess.includes(state.authRole) && state.api_token,
        verifyHRMAccess: state => state.HRMAccess.includes(state.authRole) && state.api_token,
        verifyFSLAccess: state => state.FSLAccess.includes(state.authRole) && state.api_token
    },
    mutations: {
        mutateProfileAccess: (state, payload) => state.ProfileAccess.push(payload),
        mutateAuth: state => {
            state.authRole = parseInt(localStorage.getItem('role'));
            state.api_token = localStorage.getItem('api_token');
        }
    },
    actions: {
        mutateProfileAccess: (context, payload) => context.commit('mutateProfileAccess', payload),
        mutateAuth: context => context.commit('mutateAuth')
    }
});