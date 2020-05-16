import React from 'react'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {getCryptosAction} from '../redux/cryptoDucks'

const CryptoList = () => {

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()

    return (
        <div>
            <h1>Cryptos!</h1>
            <button onClick={() => dispatch(getCryptosAction())}>Obtener</button>
            
        </div>
    )
}

export default CryptoList