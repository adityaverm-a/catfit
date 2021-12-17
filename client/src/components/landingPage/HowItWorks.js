import React from 'react'
import SectionHeader from './SectionHeader'

import VetsSrc from '../../images/vets.png'
import ChatSrc from '../../images/chat.svg'
import CatSrc from '../../images/cat.svg'
import VetSrc from '../../images/vet.svg'

const List = ({ imgSrc, title, subtitle }) => (
    <div className='HIWList'>
        <div className='HIWList__icon'>
            <img src={imgSrc} alt={title} />
        </div>
        <div className='HIWList__content'>
            <h6>{title}</h6>
            <p>{subtitle}</p>
        </div>
    </div>
)

const HIWData = [
    {
        id: 1,
        title: 'Ask a question',
        subtitle: 'Ask anything related to health, nutrition, behavior of your Pet',
        imgSrc: ChatSrc
    },
    {
        id: 2,
        title: 'Tell us more about your cat and yourself',
        subtitle: 'You can even upload photos and medical documents if you desire',
        imgSrc: CatSrc,
    },
    {
        id: 3,
        title: 'Receive a response from veterinarian',
        subtitle: 'A real Veterinarian answers your questions and/or begins LIVE chat with you',
        imgSrc: VetSrc
    }
]

const HowItWorks = () => {
    return (
        <div className='container landingHIW'>
            <SectionHeader heading='How it Works?' />
            <div className='landingHIW__container'>
                <div className='landingHIW__container__graphic'>
                    <img src={VetsSrc} alt="Vets" className='HIWImage' />
                </div>
                <div className='landingHIW__container__content'>
                    <h3>How Online Veterinarian Service works?</h3>
                    {HIWData.map(({ id, title, subtitle, imgSrc }) => (
                        <List
                            key={id}
                            title={title}
                            imgSrc={imgSrc}
                            subtitle={subtitle}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
