import React, { useState } from 'react'
import Carousel from 'react-multi-carousel';
import SectionHeader from '../SectionHeader'

import { data as pricingData} from './pricing.data'
import PricingCard from './PricingCard';

import "react-multi-carousel/lib/styles.css";
import ButtonGroup from './ButtonGroup';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      draggable: false,
    },
    tablet: {
      breakpoint: { max: 1023, min: 640 },
      items: 2,
      draggable: true,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
      draggable: true,
    },
  };

const sliderParams = {
    additionalTransfrom: 0,
    arrows: false,
    autoPlaySpeed: 3000,
    centerMode: false,
    className: '',
    slidesToSlide: 1,
    items: 3,
    containerClass: 'carousel-container',
    customButtonGroup: <ButtonGroup />,
    dotListClass: '',
    focusOnSelect: false,
    infinite: false,
    keyBoardControl: false,
    itemClass: '',
    minimumTouchDrag: 80,
    renderButtonGroupOutside: true,
    renderDotsOutside: false,
    responsive: responsive,
    showDots: false,
    sliderClass: '',
  };

const Pricing = () => {
    const { monthly, annual } = pricingData

    const[state, setState] = useState({
        active: 'monthly',
        princingPlan: monthly
    })

    const handlePricingPlan = (plan) => {
        if(plan === 'annual') {
            setState({ active: 'annual', princingPlan: annual })
        } else {
            setState({ active: 'monthly', princingPlan: monthly })
        }
    }

    return (
        <div className='container pricing'>
            <SectionHeader heading='Pricing Plan' />
            <div className='pricing__buttonGroup'>
                <div className='pricing__buttonGroup__inner'>
                    <button
                        type='button'
                        aria-label='Monthly'
                        onClick={() => handlePricingPlan('monthly')}
                        className={state.active === 'monthly' ? 'active' : ''}
                    >
                        Monthly Plan
                    </button>
                    <button
                        type='button'
                        aria-label='Annual'
                        onClick={() => handlePricingPlan('annual')}
                        className={state.active === 'annual' ? 'active' : ''}
                    >
                        Annual Plan
                    </button>
                </div>
            </div>
            <div className='pricing__pricingWrapper'>
                <Carousel {...sliderParams}>
                    {state.princingPlan.map((packageData) => (
                        <div 
                            key={packageData.id} 
                            className='pricing__pricingWrapper__pricingItem'
                        >
                            <PricingCard data={packageData} />
                        </div>
                    ))}
                </Carousel>
            </div>

        </div>
    )
}

export default Pricing
