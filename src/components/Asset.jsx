import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {getCryptoDetailAction} from '../redux/cryptoDucks'

const Asset = () => {
     // declar dispathc in order to call the actions from redux. 
     const dispatch = useDispatch()

     const asset = useSelector(store => store.cryptos.asset)
     
   
    console.log("sdfasd", asset);
    return (
        <div className="asset">
           {Number(asset.rate).toFixed(2)}$
        </div>
    )
}

export default Asset
