import React from 'react'
import cn from 'classnames'
import List from './List'
import { FaRupeeSign } from 'react-icons/fa'


const PricingCard = ({
    data: {
        name,
        header,
        buttonText,
        description,
        anotherOption,
        priceSrc,
        points
    },
}) => {
    return (
        <div className={cn('pricingBox', header ? 'package-card active' : 'package-card')}>
            {header && <span className='pricingBox__header'>{header}</span>}
            <div>
                <div className='pricingBox__pricingHeader package-header'>
                    <h4>
                        {name}
                    </h4>
                    <p>{description}</p>
                </div>
                <List items={points} />
                <div className='pricingBox__price package-price'>
                   <img src={priceSrc} alt="pricing plan" />
                    <span>per Month</span>
                </div>
                <div className='pricingBox__buttonGroup'>
                    <button
                        aria-label={buttonText}
                        className='primary'
                    >
                        {buttonText}
                    </button>
                    {anotherOption && (
                        <button
                            aria-label={anotherOption}
                            className='secondary'
                        >
                            {anotherOption}
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default PricingCard
