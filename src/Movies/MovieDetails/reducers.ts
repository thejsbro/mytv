// import { VisibilityFilters } from './actions'
import * as types from './actionTypes';
import { AnyAction } from 'redux';
import { IMovieDetails } from 'common/types';

export interface IMovieDetailsState {
    movie: IMovieDetails;
    loading: boolean;
    loaded: boolean;
}

const initialState: IMovieDetailsState = {
    movie: {} as IMovieDetails,
    loading: false,
    loaded: false
};

export function movieDetails(state = initialState, action: AnyAction) {
    switch (action.type) {
        case types.MOVIE_DETAILS_LOADING: {
            return { ...state, loading: true }
        }
        case types.MOVIE_DETAILS_LOADED: {
            const newState = {...state, loading: false, loaded: true, movie: action.data};
            return newState;
        }
        default: {
            return {...state};
        }
    }
}
