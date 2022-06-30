import React from 'react'
import LoadingGif from '../../Assets/animation_640_l50re4fi.gif'


const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh' }}>
            <img src={LoadingGif} alt="" style={{ width: '150px' }} />
        </div>
    )
}

export default Loader