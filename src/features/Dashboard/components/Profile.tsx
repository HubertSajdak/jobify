import React, { useState } from 'react'
import FormInput from 'components/FormInput/FormInput'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { Wrapper } from 'assets/styles/wrappers/Profile.styled'
import profileImg from 'assets/images/profile-img.svg'
import { toast } from 'react-toastify'
import { updateUser } from 'features/Register/userSlice'
import { useTranslation } from 'react-i18next'
const Profile = () => {
	const { t } = useTranslation('common')
	const dispatch = useAppDispatch()
	const { isLoading, user } = useAppSelector(state => state.user)
	const [userData, setUserData] = useState({
		name: user?.name || '',
		email: user?.email || '',
		lastName: user?.lastName || '',
		location: user?.location || '',
	})

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { name, email, lastName, location } = userData
		if (!name || !email || !lastName || !location) {
			toast.error('Please fill out all fields')
			return
		}
		dispatch(updateUser({ name, email, lastName, location }))
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value })
	}

	return (
		<Wrapper>
			<form className='form' onSubmit={handleSubmit}>
				<div className='profile-img'>
					<img src={profileImg} alt='user avatar' />
				</div>
				<div className='form-center'>
					<FormInput
						type='text'
						name='name'
						labelText={t('profilePage.nameInput')}
						handleChange={handleChange}
						value={userData.name}
					/>
					<FormInput
						type='text'
						name='lastName'
						labelText={t('profilePage.lastNameInput')}
						handleChange={handleChange}
						value={userData.lastName}
					/>
					<FormInput
						type='text'
						name='email'
						labelText={t('profilePage.emailInput')}
						handleChange={handleChange}
						value={userData.email}
					/>
					<FormInput
						type='text'
						name='location'
						labelText={t('profilePage.locationInput')}
						handleChange={handleChange}
						value={userData.location}
					/>
					<button className='btn'>{t('profilePage.saveButton')}</button>
				</div>
			</form>
		</Wrapper>
	)
}

export default Profile
