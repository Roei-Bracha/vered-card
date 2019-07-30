import React  from 'react'
import './Squre.scss'
const Squre = ({title,icon,url})=>{
    return(
    <div className="Squre">
        <a href={url}>
            <div className="content">
                <img src={icon}/>
                <h3>{title}</h3>
            </div>
        </a>
    </div>
    )
}

export default Squre