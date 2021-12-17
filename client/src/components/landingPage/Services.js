import React from 'react'
import SectionHeader from './SectionHeader'

import ImgSrc from '../../images/whats-included.png'

const contentData = [
    {
        id: 1,
        text: 'On Demand Consultations'
    },
    {
        id: 2,
        text: 'Anxiety Management'
    },
    {
        id: 3,
        text: 'Wellness and Prevention'
    },
    {
        id: 4,
        text: 'Digestive Problems'
    },
    {
        id: 5,
        text: 'Mobility Improvement'
    },
    {
        id: 6,
        text: 'Skin Health'
    },
]

const Services = () => {
    return (
        <div className='container services'>
            <SectionHeader heading='What is included in Online Vet Service?' />
            <div className='services__container'>
                <div className='services__container__content'>
                    <h5>Quick access, right when you need one. No appointment necessary. 24/7 advice from a India’s Qualified vet wherever you are.</h5>
                    <div className='features'>
                        {contentData.map(({ id, text }) => (
                            <h6 key={id}>{text}</h6>
                        ))}
                    </div>
                </div>
                <div className='services__container__graphic'>
                    <img src={ImgSrc} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Services
