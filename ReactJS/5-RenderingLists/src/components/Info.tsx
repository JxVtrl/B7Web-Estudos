import React from 'react';

type Props = {
    data: {
        name: string;
        age: string;
    }
}

export const Info = ({data}:Props) => {
    return (
        <li>
            {data.name} - {data.age}
        </li>
    );
}
 