import React, { useEffect, useRef } from 'react'
import TextReveal from '../Components/TextAnimation/TextReveal'
import Gif from '../Assets/Under construction (1).gif'
import video from '../Assets/Jic It Solution Video Logo 3.m4v'


const Index = () => {
    const ref = useRef()

    console.log({ ref })

    useEffect(() => {
        ref.current && ref.current.play()
    }, [ref.current])
    return (
        <div className='flex h-screen w-full justify-center items-center flex-col bg-black'>

            <div>
                <video
                    ref={ref}
                    playsInline
                    className='h-96'
                    muted={true}
                    autoPlay={false}
                    preLoad="auto"
                    controls={false}
                    loop
                // poster={PosterImg}
                >
                    <source src={video} type="video/mp4" />
                </video>
                {/* <img src={Gif} alt="" className='h-96' /> */}
            </div>

            <div className='text-center'>
                {/* <TextReveal tag={'h1'} tagClassName={'text-2xl mt-4 font-bold text-white'} content={`We’ll be back soon!`} /> */}
                <TextReveal tag={'h4'} tagClassName={' font-semibold mt-4 text-white'} content={`We understand your patience, Innovation under Craft, Keep your Expectations HIGH!!!!`} />
            </div>
            {/* <TextReveal tag={'a'} content={`contact us`} /> */}
            {/* <TextReveal tag={'p'} content={`otherwise well be back online shortly!`} /> */}
            {/* <h1>hello world</h1> */}
        </div>
    )
}

export default Index