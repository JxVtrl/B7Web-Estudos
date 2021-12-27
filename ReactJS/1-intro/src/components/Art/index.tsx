import React, {ReactNode} from 'react';
// import './style.css';

type Props = {
    label: string;
    children: ReactNode;
}

const Art = ({label, children}: Props) => {
    return (
        <>
            {children}
            <p>{label}</p>
        </>
    )
}

export default Art;