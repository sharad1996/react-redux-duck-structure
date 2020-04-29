import { NavigationActionTypes } from '../constants';

const INITIAL_STATE = {
    hidden: true
};

const navigationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NavigationActionTypes.TOGGLE_NAVIGATION_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        default:
            return state;
    }
};

export default navigationReducer;