import { ChangeEvent } from 'react';
import './index.css'

interface InputProps {
  type?: string;
  size?: 'LARGE' | 'MEDIUM' | 'SMALL';
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const mapClass: { [key: string]: string} = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small'
}

export function Input({ type, size, placeholder, onChange }: InputProps) {
  return (
    <input placeholder={placeholder} onChange={onChange} className={`input ${size ? mapClass[size] : 'large'}`} type={type}/>
  )
}