import React from 'react'
import SectionHeader from './SectionHeader'

const WhatWeDo = () => {
    return (
        <div className='container landingWWD'>
            <SectionHeader heading='What We Do?' />
            <div className='landingWWD__content'>
                <p>At <span>cat.fit</span>, we believe in a world in which each cat’s life experience will be as good as it can be. We do this by providing veterinary professionals and cat owners with the resources, support and advice they need to care better for their cats.</p>
                <p>Explore our tips and advice for every aspect of your cat’s care and enjoy the benefits of a feline companion who is happy, healthy and content.</p>
            </div>
        </div>
    )
}

export default WhatWeDo
