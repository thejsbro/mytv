// import { VisibilityFilters } from './actions'
import * as types from './actionTypes';
import { AnyAction } from 'redux';
import { ITrailer } from 'common/types';

export interface ITrailerState {
    trailer: ITrailer;
    loading: boolean;
    loaded: boolean;
}

const initialState: ITrailerState = {
    trailer: {} as ITrailer,
    loading: false,
    loaded: false
};

export function trailer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case types.TRAILER_LOADING: {
            return { ...state, loading: true }
        }
        case types.TRAILER_LOADED: {
            const newState = {...state, loading: false, loaded: true, trailer: action.data};
            return newState;
        }
        default: {
            return { ...state };
        }
    }
}
