import React from 'react';
import { UserName, UserTag } from './style';

export const UserInfo = ({ name, tag }) => {
    return (
        <>
            <UserName>{name}</UserName>
            <UserTag>{tag}</UserTag>
        </>
    );
};
