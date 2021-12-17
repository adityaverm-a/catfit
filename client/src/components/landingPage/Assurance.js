import React from 'react'
import { FcInspection } from 'react-icons/fc'

const Assurance = () => {
    return (
        <div className='assurance'>
            <div className='assurance__content'>
                <h6><span>cat.fit</span> is India’s Most Trusted Online Veterinary Health Care Consultation Service provider. Experienced veterinarians provide immediate, personalized and expert answers to your concerns.</h6>
                <div className='assurance__content__verified'>
                    <FcInspection className='verifiedIcon' width='2em' />
                    <p>All our Veterinarians pass ThePetNest Enhanced Background Check.</p>
                </div>
            </div>
        </div>
    )
}

export default Assurance
