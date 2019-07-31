import React from 'react';

import './SquaresRow.scss'
import Square from './Squre/Squre'

const SquaresRow = ({data})=>{
    return(
        <div className={'SquaresRow'}>
            {data.map((squareData)=>{
                return(<Square {...squareData} key={squareData.url}/>)
            })}
        </div>
    )
}

export default SquaresRow