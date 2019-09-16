import * as types from './actionTypes';

 export const changeHeaderTitle = (title: string) => ({
    type: types.CHANGE_HEADER_TITLE,
    data: title
})

export const dropHeaderTitle = () => ({
    type: types.DROP_HEADER_TITLE
})
