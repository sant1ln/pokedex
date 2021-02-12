import React from 'react'
import Loader from '../static/loader.svg'


export const Loading = () => {
    return (
        <div className="loader_container">
            <img src={Loader} alt="loader"/>
        </div>
    )
}
