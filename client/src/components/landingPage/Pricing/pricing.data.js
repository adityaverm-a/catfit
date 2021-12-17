import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io'
import zero from '../../../images/zero.png'
import cpm from '../../../images/499.png'
import cpa from '../../../images/399.png'
import ppm from '../../../images/599.png'
import ppa from '../../../images/459.png'

export const data = {
    monthly: [
        {
            id: 1,
            name: 'Free Plan',
            description: 'For first time users',
            buttonText: 'Start free trail',
            priceSrc: zero,
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Call & Video Consultancy',
                    isAvailable: true
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Personalized Advice',
                    isAvailable: true
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'One time consultation',
                    isAvailable: true
                },
                {
                    id: 4,
                    icon: <IoIosCloseCircle />,
                    text: 'Complete Consultancy',
                    isAvailable: false
                },
                {
                    id: 5,
                    icon: <IoIosCloseCircle />,
                    text: '1 month follow ups',
                    isAvailable: false
                },
            ]
        },
        {
            id: 2,
            name: 'Consultation Plan',
            description: 'For Consultations',
            buttonText: 'Create Account',
            priceSrc: cpm,
            anotherOption: 'Or Start 14 Days free trail',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Call & Video Consultancy',
                    isAvailable: true
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Personalized Advice',
                    isAvailable: true
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Full time consultation',
                    isAvailable: true
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Complete Consultancy',
                    isAvailable: true
                },
                {
                    id: 5,
                    icon: <IoIosCheckmarkCircle />,
                    text: '1 month follow ups',
                    isAvailable: true
                },
            ]
        },
        {
            id: 3,
            name: 'Pro Plan',
            header: 'Suggested',
            description: 'For Essential Care',
            buttonText: 'Create Account',
            priceSrc: ppm,
            anotherOption: 'Or Start 14 Days free trail',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Personalized Advice',
                    isAvailable: true
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Understanding Cat Signs',
                    isAvailable: true
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Full time consultation',
                    isAvailable: true
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Complete Consultancy',
                    isAvailable: true
                },
                {
                    id: 5,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Cat Parenting Tips',
                    isAvailable: true
                },
            ]
        }
    ],
    annual: [
        {
            id: 1,
            name: 'Free Plan',
            description: 'For first time users',
            buttonText: 'Start free trail',
            priceSrc: zero,
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Call & Video Consultancy',
                    isAvailable: true
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Personalized Advice',
                    isAvailable: true
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'One time consultation',
                    isAvailable: true
                },
                {
                    id: 4,
                    icon: <IoIosCloseCircle />,
                    text: 'Complete Consultancy',
                    isAvailable: false
                },
                {
                    id: 5,
                    icon: <IoIosCloseCircle />,
                    text: '1 month follow ups',
                    isAvailable: false
                },
            ]
        },
        {
            id: 2,
            name: 'Consultation Plan',
            description: 'For Basic Cat Consultations',
            buttonText: 'Create Account',
            priceSrc: cpa,
            anotherOption: 'Or Start 14 Days free trail',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Call & Video Consultancy',
                    isAvailable: true
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Personalized Advice',
                    isAvailable: true
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Full time consultation',
                    isAvailable: true
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Complete Consultancy',
                    isAvailable: true
                },
                {
                    id: 5,
                    icon: <IoIosCheckmarkCircle />,
                    text: '1 month follow ups',
                    isAvailable: true
                },
            ]
        },
        {
            id: 3,
            name: 'Pro Plan',
            header: 'Suggested',
            description: 'For Essential Care',
            buttonText: 'Create Account',
            priceSrc: ppa,
            anotherOption: 'Or Start 14 Days free trail',
            points: [
                {
                    id: 1,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Personalized Advice',
                    isAvailable: true
                },
                {
                    id: 2,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Understanding Cat Signs',
                    isAvailable: true
                },
                {
                    id: 3,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Full time consultation',
                    isAvailable: true
                },
                {
                    id: 4,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Complete Consultancy',
                    isAvailable: true
                },
                {
                    id: 5,
                    icon: <IoIosCheckmarkCircle />,
                    text: 'Cat Parenting Management',
                    isAvailable: true
                },
            ]
        }
    ]
}