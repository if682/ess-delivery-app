import './index.css'

interface InputProps {
  type?: string;
  size?: 'LARGE' | 'MEDIUM' | 'SMALL',
  placeholder?: string
}

const mapClass: { [key: string]: string} = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

export function Input({ type, size, placeholder }: InputProps) {
  return (
    <input placeholder={placeholder} className={`input ${size ? mapClass[size] : 'large'}`} type={type}/>
  )
}