import * as types from './actionTypes';
import axios from 'axios';
import { get } from 'lodash';

export const getTrailer= (id: string) =>
    (dispatch: any) => {
        const params = {
            classification_id: 5,
            device_identifier: 'web',
            locale: 'es',
            market_code: 'es',
        }
        dispatch({
            type: types.TRAILER_LOADING,
        })
        return (
            axios.post(
                `https://gizmo.rakuten.tv/v3/me/streamings`, 
                {
                    audio_language:"SPA",
                    audio_quality:"2.0",
                    content_id: id,
                    content_type:"movies",
                    device_serial: "device_serial_1",
                    device_stream_video_quality:"FHD",
                    player:"web:PD-NONE",
                    subtitle_language:"MIS",
                    video_type:"trailer"
                },
                {params}
            )
                .then((response) => {
                    dispatch({
                    type: types.TRAILER_LOADED,
                    data: {...get(response, 'data.data.stream_infos.0', {}), id},
                })})
                .catch((error) => console.log('ERROR: ', error))
    )};
