import React from 'react';
import { SocialSvg } from './style';

export const SocialIcon = ({ icon, link }) => {
    return (
        <SocialSvg href={link} target='_blank'>
            {icon}
        </SocialSvg>
    );
};
