import styled from 'styled-components';

export const SocialSvg = styled.a`
    font-size: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    padding: 0.2rem;

    :focus {
        outline: -webkit-focus-ring-color auto 1px;
        outline-offset: 0.3rem;
        border-radius: 50%;
    }

    margin-right: 0.1rem;

    :last-child {
        margin-right: 0;
    }
`;
