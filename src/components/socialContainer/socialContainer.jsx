import React from 'react';
import { SocialDiv } from './style';
import { SocialIcon } from './socialIcon/socialIcon';
import {
    AiFillFacebook,
    AiFillSkype,
    AiFillYoutube,
    AiOutlineGithub,
    AiOutlineInstagram,
    AiOutlineLinkedin,
    AiOutlineTwitter,
    AiOutlineWhatsApp,
} from 'react-icons/ai';

export const SocialContainer = ({ perfil }) => {
    return (
        <SocialDiv>
            {perfil.instagram && (
                <SocialIcon
                    icon={AiOutlineInstagram()}
                    link={perfil.instagram}
                />
            )}
            {perfil.whatsapp && (
                <SocialIcon icon={AiOutlineWhatsApp()} link={perfil.whatsapp} />
            )}
            {perfil.twitter && (
                <SocialIcon icon={AiOutlineTwitter()} link={perfil.twitter} />
            )}
            {perfil.linkedin && (
                <SocialIcon icon={AiOutlineLinkedin()} link={perfil.linkedin} />
            )}
            {perfil.github && (
                <SocialIcon icon={AiOutlineGithub()} link={perfil.github} />
            )}
            {perfil.youtube && (
                <SocialIcon icon={AiFillYoutube()} link={perfil.youtube} />
            )}
            {perfil.facebook && (
                <SocialIcon icon={AiFillFacebook()} link={perfil.facebook} />
            )}
            {perfil.skype && (
                <SocialIcon icon={AiFillSkype()} link={perfil.skype} />
            )}
        </SocialDiv>
    );
};
