import React from 'react'
import { Wrapper } from 'assets/styles/wrappers/FormSelect.styled'
import { FormInputProps } from 'types/types'
import { useTranslation } from 'react-i18next'
interface FormSelectProps extends Omit<FormInputProps, 'type' | 'handleChange'> {
	list: string[]
	handleChange: React.ChangeEventHandler<HTMLSelectElement>
}
const FormSelect = ({ labelText, name, value, handleChange, list }: FormSelectProps) => {
	const { t } = useTranslation('common')
	return (
		<Wrapper className='form-row'>
			<label htmlFor={name} className='form-label'>
				{labelText}
			</label>
			<select name={name} id={name} value={value} onChange={handleChange} className='form-select'>
				{list.map((item, index) => {
					return (
						<option key={index} value={item}>
							{t(`statusAndJobTypeOptions.${item}`)}
						</option>
					)
				})}
			</select>
		</Wrapper>
	)
}

export default FormSelect
