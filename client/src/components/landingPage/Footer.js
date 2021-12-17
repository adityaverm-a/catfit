import React from 'react'
import { FiGithub } from "react-icons/fi"

const Footer = () => {
    return (
        <footer>
            <div className='footer__content'>
                <a href='https://github.com/adityaverm-a/learning-sass/blob/main/index.html' target='_blank' rel='noreferrer'>
                    <FiGithub className='githubLogo' />
                </a>
                <h6>© 2021 <span>cat.fit</span>, Inc. All Rights Reserved. Privacy policy</h6>
            </div>
        </footer>
    )
}

export default Footer
