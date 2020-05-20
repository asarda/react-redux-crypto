import React from 'react'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// import action
import {getCryptosAction, getCryptoDetailAction} from '../redux/cryptoDucks'

import Asset from './Asset'

const CryptoList = () => {

    // declar dispathc in order to call the actions from redux. 
    const dispatch = useDispatch()

    const cryptosList = useSelector(store => store.cryptos.allCryptos)
    console.log("CRYPTOLIST",cryptosList)

    return (
        <div>
            <h1>Cryptos!</h1>
            <button onClick={() => dispatch(getCryptosAction())}>Get ALl cryptos</button>
            <ul className="assets-list">
                {
                    Object.entries(cryptosList).map( ([key,value], i) => (
                        <li key={i}>
                            {value.name} ({value.asset_id}) <button onClick={()=>dispatch(getCryptoDetailAction(value.asset_id))}>Info</button>
                        </li>
                    ))
                }
            </ul>
            <Asset></Asset>
        </div>
    )
}

export default CryptoList