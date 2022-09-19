import { InputContainer } from './styles'

interface InputProps {
  type: string
  placeholder: string
}

export const Input = ({ type, placeholder }: InputProps) => {
  return <InputContainer type={type} placeholder={placeholder} />
}
