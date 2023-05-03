import { SocialContainer } from './components/socialContainer/socialContainer.jsx';
import { UserIcon } from './components/userIcon/userIcon.jsx';
import { UserInfo } from './components/userInfo/userInfo.jsx';
import { UserLinks } from './components/userLinks/userLinks.jsx';
import { Main } from './style.js';

function App() {
    const perfis = {
        github: 'https://github.com/MatheusBAlves',
        instagram: 'https://www.instagram.com/matheus.balves/',
        linkedin: 'https://www.linkedin.com/in/matheus-balves/',
        whatsapp: 'https://wa.me/5551998889775',
        // twitter: 't',
        // youtube: 't',
        // facebook: 't',
        // skype: 't',
    };

    return (
        <Main>
            <UserIcon image='https://github.com/MatheusBAlves.png' />
            <UserInfo name='Matheus B. Alves' tag='@Matheus.BAlves' />
            <UserLinks title='GitHub' link='https://github.com/MatheusBAlves' />
            <UserLinks title='Instagram' link='' />
            <UserLinks title='Linkedin' link='' />
            <SocialContainer perfil={perfis} />
        </Main>
    );
}

export default App;
