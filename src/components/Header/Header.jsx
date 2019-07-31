import React from 'react'
import './Header.scss'

const Header = ()=>{
    const backgroundImageUrl = '/images/pexels-photo-556663.jpeg'
    const profilePicUrl='/images/profile.JPG'
    return(
    <div className="Header">
        <div className="backgroundImage"
            style={{ backgroundImage: `url(${backgroundImageUrl})`}}
            alt='Photo by Andrew Neel from Pexels'
            >
        </div>
        <div className='profilePicContaier'>
            <img className='logo' src="/images/logo.png" alt={"logo"}/>
            <div className="profilePic"
                style={{ backgroundImage: `url(${profilePicUrl})`}}
            >

        </div>
        </div>
        <div className="NameBanner">
            <span className="name">
                <span className='name-span'>ורד ברכה</span>
            </span>
            <span className='terapist'>מטפלת בשיטת NLP</span>
        </div>
    </div>
    )
}

export default  Header