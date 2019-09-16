import * as types from './actionTypes';
import axios from 'axios';
import { get } from 'lodash';

export const getMovieDetails = (id: string) =>
    (dispatch: any) => {
        const params = {
            classification_id: 5,
            device_identifier: 'web',
            locale: 'es',
            market_code: 'es',
        }
        dispatch({
            type: types.MOVIE_DETAILS_LOADING,
        })
        return (
            axios.get(`https://gizmo.rakuten.tv/v3/movies/${id}`, {params})
                .then((response) => {
                    const movie = get(response, 'data.data', {});
                    dispatch({
                    type: types.MOVIE_DETAILS_LOADED,
                    data: movie,
                    });
                })
                .catch((error) => console.log('ERROR: ', error))
    )};
