import axios from 'axios'

// Constants
const dataInicial = {
    allCryptos: [],  
    asset: {}     
}
const GET_CRYPTO_SUCCESS = 'GET_CRYPTO_SUCCESS'
const GET_ASSET_SUCCESS = 'GET_ASSET_SUCCESS'


// Reducer
export default function cryptoReducer (state = dataInicial, action) {
    switch(action.type){
        case GET_CRYPTO_SUCCESS:
            return {...state, allCryptos: action.payload}
        case GET_ASSET_SUCCESS:
            return {...state, asset: action.payload}
        default: 
            return state
    }
}

// Actions
export const getCryptoDetailAction = (asset) => async (dispatch) => {
    try {
        const headers = {
            "X-CoinAPI-Key": process.env.REACT_APP_COINAPI_API_KEY
        }
        //doesn't work with headers way... don't know why
        const res = await axios.get(`https://rest.coinapi.io/v1/exchangerate/${asset}/USD?apikey=${process.env.REACT_APP_COINAPI_API_KEY}`)
        dispatch({
            type: GET_ASSET_SUCCESS,
            payload: {
                assetBase: res.data.asset_id_base,
                assetQuote: res.data.asset_id_quote,
                rate: res.data.rate
            }
        })
       // console.log(res.data)

    } catch(e) {

    }
}

export const getCryptosAction = () => async (dispatch, getState) => {
    //WARNING: for updates this is not necesari. I'm saving in localstorage
    if (localStorage.getItem("assets")) {
        dispatch({
            type: GET_CRYPTO_SUCCESS,
            payload: JSON.parse(localStorage.getItem("assets"))
        })
    } else {
        try {
            const headers = {
                "X-CoinAPI-Key": process.env.REACT_APP_COINAPI_API_KEY
            }
            //const res = await axios.get(`http://api.coinlayer.com/api/list?access_key=${process.env.REACT_APP_COINLAYER_API_KEY}`)
            const res = await axios.get(`https://rest.coinapi.io/v1/assets`, headers)
    
            console.log(res)
            //saving in local storage.
            localStorage.setItem("assets", JSON.stringify(res.data))
            dispatch({
                type: GET_CRYPTO_SUCCESS,
                payload: res.data,
            })
        } catch (error) {
            console.log(error)
        }
    }
   
}
