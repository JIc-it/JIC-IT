import React, { useEffect, useRef } from 'react'
import './style.css'


const TextReveal = ({ tag, content, tagClassName }) => {
    const Tag = tag

    // const ref = useRef(null)

    useEffect(() => {
        const item = [...document.querySelectorAll('.text-reveal-tag')]

        let options = {
            rootMargin: '-0%',
            threshold: 0.0
        }

        let observer = new IntersectionObserver(showItem, options)

        function showItem(entries) {
            // console.log(entries)
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.children[0].classList.add('active')
                    // let letters = [...document.querySelectorAll('.texts')];
                    // letters.forEach((letter, index) => {
                    //     setTimeout(() => {
                    //         letter.children[0].classList.add('active')
                    //     }, index * 20);
                    // });
                    // console.log('working')
                }
            })
        }

        item.forEach(item => {
            let newString = ''
            // console.log(item.children[0]?.innerText.split(''))
            // let itemText = item.children[0]?.innerText.split(``);
            // itemText.map(letter => (newString += letter == ' ' ? `<span className='texts gap'></span>` : `<span className='texts letter'>${letter}</span>`))
            // console.log(newString)
            // item.innerHTML = newString;
            observer.observe(item)
        });

    }, [])

    // console.log(item)

    return (
        <>
            <Tag className={'text-reveal-tag ' + tagClassName} >
                <div className={'text-reveal-content'}>
                    {content}
                </div>
            </Tag>
        </>
    )
}

export default TextReveal