import axios from 'axios';

export const GET_ALL_SENTENCE = 'GET ALL SENTENCE'

export function getSentences() {
    const response = axios.get('/api/get-sentences');
    return dispatch => {
        response.then(res=>{
            return dispatch({
                type: GET_ALL_SENTENCE,
                payload: res.data
            });
        })
    }
}

