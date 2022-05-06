import { FormInputProps } from 'types/types'
import { Wrapper } from 'assets/styles/wrappers/FormInput.styled'
const FormInput = ({ type, name, value, handleChange, labelText }: FormInputProps) => {
	return (
		<Wrapper className='form-row'>
			<label htmlFor={name} className='form-label'>
				{labelText || name}
			</label>
			<input type={type} value={value} name={name} onChange={handleChange} className='form-input' />
		</Wrapper>
	)
}

export default FormInput
