import React from 'react'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'

const ButtonGroup = ({ next, previous }) => {
    return (
        <div>
            <div className='button__group'>
                <button
                    onClick={previous}
                    aria-label='Previous'
                >
                    <IoIosArrowRoundBack />
                </button>
                <button
                    onClick={next}
                    aria-label='Next'
                >
                    <IoIosArrowRoundForward />
                </button>
            </div>
        </div>
    )
}

export default ButtonGroup
