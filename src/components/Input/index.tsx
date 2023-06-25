// Formik
import { useField, FieldConfig } from 'formik';
import { ClassAttributes, InputHTMLAttributes, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

interface InputProps {
	className?: string;
	border?: string;
}

const InputField = ({
	className = '',
	border = '',
	...props
}: ClassAttributes<HTMLInputElement> &
	InputHTMLAttributes<HTMLInputElement> &
	FieldConfig<any> &
	InputProps): JSX.Element => {
	const [field, meta] = useField(props);
	const [showPassword, setShowPassword] = useState(false)
	props = { ...props, type: props.type === "password" ? showPassword ? "text" : "password" : props.type }
	return (
		<div className='flex flex-col w-full mb-5 justify-center'>
			<div className='flex w-full relative'>
				<input
					className={`rounded-xl p-4 outline-none ${border ? border : 'border-4'} ${className} ${meta.error ? 'border-red-error' : 'border-blue-004'
						} w-full`}
					{...field}
					{...props}


					autoComplete='false'
				/>
				{props.name.toLowerCase().includes("password") ? <div onClick={() => setShowPassword(!showPassword)}>{showPassword ? <EyeSlashIcon width={20} className="absolute right-10 bottom-5 text-blue-001" /> : <EyeIcon width={20} className="absolute right-10 bottom-5 text-blue-001" />}</div> : null}
			</div>
			{meta.error && (
				<span className='text-xs text-red-error'> {meta.error} </span>
			)}
		</div>
	);
};

export default InputField;