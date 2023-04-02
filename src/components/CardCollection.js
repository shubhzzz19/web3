import React from 'react'
import weth from '../assets/weth.png'
import './CardCollection.css'
export const CardCollection = ({id,name,traits,image}) => {
    return (
        <div className='collectionCard'>
            <img src={image} alt='' />
            <div className='details'>
                <div className='name'>
                    {name} <div className='id'>*#{id}</div>
                </div>
            
                <div className='priceContainer'>
                    <img src={weth} className='wethImg' alt=''/>
                    <div className='Price'> {traits[0]?.value} </div>
                </div>
            </div>
        </div>
    )
}
