import * as types from './actionTypes';
import axios from 'axios';
import { get } from 'lodash';

export const getListOfMovies = (id: string) =>
    (dispatch: any) => {
        const params = {
            classification_id: 5,
            device_identifier: 'web',
            locale: 'es',
            market_code: 'es',
        }
        dispatch({
            type: types.LIST_OF_MOVIES_LOADING,
        })
        return (
            axios.get(`https://gizmo.rakuten.tv/v3/lists/${id}`, {params})
                .then((response) => {
                    dispatch({
                    type: types.LIST_OF_MOVIES_LOADED,
                    data: get(response, 'data.data.contents.data', []),
                })})
                .catch((error) => console.log('ERROR: ', error))
    )};
