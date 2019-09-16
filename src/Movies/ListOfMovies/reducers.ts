// import { VisibilityFilters } from './actions'
import * as types from './actionTypes';
import { AnyAction } from 'redux';
import { IMovie } from 'common/types';

export interface IListOfMoviesState {
    movies: IMovie[];
    loading: boolean;
    loaded: boolean;
}

const initialState: IListOfMoviesState = {
    movies: [],
    loading: false,
    loaded: false
};

export function listOfMovies(state = initialState, action: AnyAction) {
    switch (action.type) {
        case types.LIST_OF_MOVIES_LOADING: {
            return { ...state, loading: true }
        }
        case types.LIST_OF_MOVIES_LOADED: {
            const newState = {...state, loading: false, loaded: true, movies: action.data};
            return newState;
        }
        default: {
            return {...state};
        }
    }
}
