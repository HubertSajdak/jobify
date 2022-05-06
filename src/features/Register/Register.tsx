import img from 'assets/images/register-img.svg'
import { Wrapper } from 'assets/styles/wrappers/Register.styled'
import React, { useEffect, useState } from 'react'
import { RegisterProps } from 'types/types'
import FormInput from 'components/FormInput/FormInput'
import Logo from 'components/Logo/Logo'
import LangSwitcher from 'i18n/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from 'store/hooks'
import { toast } from 'react-toastify'
import { loginUser, registerUser } from './userSlice'
import { useNavigate } from 'react-router-dom'

const initialState: RegisterProps = {
	name: '',
	email: '',
	password: '',
	isMember: true,
}
const Register = () => {
	const { t } = useTranslation('common')
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const { isLoading, user } = useAppSelector(state => state.user)
	const [values, setValues] = useState(initialState)

	useEffect(() => {
		if (user) {
			setTimeout(() => {
				navigate('/')
			}, 3000)
		}
	}, [navigate, user])

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [e.target.name]: e.target.value })
	}
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { name, email, password, isMember } = values
		if (!email || !password || (!isMember && !name)) {
			toast.error('Please fill out all fields')
			return
		}
		if (isMember) {
			dispatch(loginUser({  email, password }))
			return
		}
		dispatch(registerUser({ name, email, password }))
	}
	const toggleMember = () => {
		setValues({ ...values, isMember: !values.isMember })
	}
	return (
		<Wrapper className='full-page'>
			<LangSwitcher />
			<div className='content'>
				<img className='register-img' src={img} alt='people pointing at register form' />
				<form className='form' onSubmit={onSubmit}>
					<Logo />
					<h3>{values.isMember ? t('registerPage.headerLog') : t('registerPage.headerReg')}</h3>
					{!values.isMember && (
						<FormInput
							name='name'
							labelText={t('registerPage.name')}
							type='text'
							value={values.name}
							handleChange={handleChange}
						/>
					)}
					<FormInput
						name='email'
						labelText={t('registerPage.email')}
						type='email'
						value={values.email}
						handleChange={handleChange}
					/>
					<FormInput
						name='password'
						labelText={t('registerPage.password')}
						type='password'
						value={values.password}
						handleChange={handleChange}
					/>
					<button className='btn' type='submit'>
						{values.isMember ? t('registerPage.login') : t('registerPage.register')}
					</button>
					<p>
						{values.isMember ? t('registerPage.memberText2') : t('registerPage.memberText1')}
						<button type='button' className='btn member-btn' onClick={toggleMember}>
							{values.isMember ? t('registerPage.register') : t('registerPage.login')}
						</button>
					</p>
				</form>
			</div>
		</Wrapper>
	)
}

export default Register
