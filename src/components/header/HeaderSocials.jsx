import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {GoMarkGithub} from 'react-icons/go'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href="https://www.linkedin.com/in/pruthvi-hingu/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
			<a href="https://github.com/pruthvi03" target="_blank" rel="noreferrer"><GoMarkGithub/></a>
			<a href="https://dribbble.com/pruthvi03" target="_blank" rel="noreferrer"><FiDribbble/></a>
		</div>
	)
}

export default HeaderSocials