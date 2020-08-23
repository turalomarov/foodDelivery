import React from 'react';
import Lottie from 'react-lottie';

const LottieComponent = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.animation
    }

    return (
        
        <Lottie options={defaultOptions} height={props.height}/>
        
    )
}

export default LottieComponent;