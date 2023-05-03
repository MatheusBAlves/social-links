import React from 'react';
import { Link } from './style';

export const UserLinks = ({ title, link }) => {
    return (
        <Link href={link} target='_blank'>
            {title}
        </Link>
    );
};
