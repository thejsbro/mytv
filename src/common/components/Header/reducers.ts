import * as types from './actionTypes';
import { AnyAction } from 'redux';

export interface IHeaderState {
    title: string;
}

const initialState = {
    title: 'RakutenTV'
};

export function header(state = initialState, action: AnyAction) {
    switch (action.type) {
        case types.CHANGE_HEADER_TITLE: {
            return {...state, title: action.data || initialState.title}
        }
        case types.DROP_HEADER_TITLE: {
            return {...state, title: initialState.title}
        }
        default: {
            return {...state};
        }
    }
}
