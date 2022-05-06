import React from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import links from 'utils/links'
const NavLinks = () => {
	const { t } = useTranslation('common')
	return (
		<div className='nav-links'>
			{links.map(link => {
				return (
					<NavLink
						to={link.path}
						className={({ isActive }) => {
							return isActive ? 'nav-link active' : 'nav-link'
						}}
						key={link.id}>
						<>
							<span className='icon'>{link.icon}</span>
							{t(`navLinks.${link.text}`)}
						</>
					</NavLink>
				)
			})}
		</div>
	)
}

export default NavLinks
