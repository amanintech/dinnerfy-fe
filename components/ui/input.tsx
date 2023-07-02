import { FC, forwardRef } from "react";
import { useForm } from "react-hook-form";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> =forwardRef( ({ label, ...props }) => {
  const {register} = useForm();
  return <input {...props} {...register(label, { required: true })}  placeholder={label}></input>;
})

export default Input;
