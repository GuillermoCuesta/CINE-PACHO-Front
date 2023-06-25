import { ReactElement, ReactNode } from 'react'

interface Props {
    children: ReactNode;
    className?: string;
}

const Card: React.FC<Props> = ({ children, className='' }: Props): ReactElement => {
    return (
        <div className={`w-full h-full rounded-xl shadow-card ${className}`}>
            {children}
        </div>

    )
}

export default Card