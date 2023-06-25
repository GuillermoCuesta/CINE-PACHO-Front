import { ClassAttributes, InputHTMLAttributes, useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
// Formik
import { Field, FieldConfig, useField } from 'formik';

interface InputProps {
	className?: string;
}

const InputFieldArea = ({
	...props
}: ClassAttributes<HTMLInputElement> &
	InputHTMLAttributes<HTMLInputElement> &
	FieldConfig<unknown> &
	InputProps): JSX.Element => {
	const [field, meta] = useField(props);
	const [showPassword, setShowPassword] = useState(false)
	props = { ...props, type: props.type === "password" ? showPassword ? "text" : "password" : props.type }
	return (
		<div className='flex flex-col w-full mb-5 justify-center'>
			<div className='flex w-full relative'>
				<Field
					as="textarea"
		
					className="text-blue-001 text-sm p-4 font-medium bg-blue-004 rounded-xl w-full mt-2 mb-2 outline-none focus:border-blue-001 focus:border-2  "
					rows={13}
					cols={12}
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

export default InputFieldArea;