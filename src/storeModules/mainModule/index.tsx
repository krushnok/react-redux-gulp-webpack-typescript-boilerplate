import {createContainer, createSagas} from "redux-box";
import {TypedAction} from "../../common/TypedAction";

export interface MainModuleProps {
    active: boolean
}


/**
 * This is the initial state.
 * @type {{active: boolean}}
 */
const state = {
    active: false
};

const actions = {
    switchActive: (): TypedAction<{}> => {
        return ({
                type: "SWITCH_ACTIVE",
                payload: {}
            }
        )
    }
};

const mutations = {
    SWITCH_ACTIVE: (state: MainModuleProps, action: TypedAction<{}>) => {
        state.active = state.active ? false : true;
        return state;
    },
};

const sagas = createSagas({
    SWITCH_ACTIVE: function* (action) {
        console.log("saga got triggered");
    }
});

export const module = {
    name: "mainModule",
    state,
    actions,
    mutations,
    sagas
};
