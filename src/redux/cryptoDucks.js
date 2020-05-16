import axios from 'axios'

// Constantes
const dataInicial = {
    cryptos: {},    
}
const GET_CRYPTO_SUCCESS = 'GET_CRYPTO_SUCCESS'


// Reducer
export default function cryptoReducer (state = dataInicial, action) {
    switch(action.type){
        case GET_CRYPTO_SUCCESS:
            return {...state, cryptos: action.payload}
        default: 
            return state
    }
}

// Acciones
export const getCryptosAction = () => async (dispatch, getState) => {
    
    try {
        const res = await axios.get(`http://api.coinlayer.com/api/list?access_key=${process.env.REACT_APP_COINLAYER_API_KEY}`)
        dispatch({
            type: GET_CRYPTO_SUCCESS,
            payload: res.data.crypto,
        })
    } catch (error) {
        console.log(error)
    }
}
