import React from 'react'

import LunaImg from '../../images/Luna.png'
import LioImg from '../../images/Lio.png'
import BellaImg from '../../images/Bella.png'

const reviewData = [
    {
        id: 1,
        name: 'Luna',
        location: 'New Delhi, India',
        imgSrc: LunaImg,
        review: `“The only best decision my hooman every made was, getting in touch with cat.fit.”`
    },
    {
        id: 2,
        name: 'Lio',
        location: 'Kolkata, India',
        imgSrc: LioImg,
        review: `“My hooman is really dumb, but he made the right choice by getting help from cat.fit.”`
    },
    {
        id: 3,
        name: 'Bella',
        location: 'Bangalore, India',
        imgSrc: BellaImg,
        review: `“Thank you to the vets from cat.fit, I’m healthy again. Now, I can get back to annoying my hooman!”`
    }
]

const Card = ({ data: { name, location, imgSrc, review } }) => (
    <div className='reviewCard'>
        <img src={imgSrc} alt={name} />
        <p>{review}</p>
        <div className='info'>
            <h6>{name}</h6>
            <p>{location}</p>
        </div>
    </div>
)

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div className='testimonials__content'>
                <h3>Testimonials</h3>
                <h5>Meet our Feline Clients</h5>
                <div className='testimonials__content__reviews'>
                    {reviewData.map((data) => (
                        <Card key={data.id} data={data} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonials
