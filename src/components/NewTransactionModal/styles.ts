import styled from 'styled-components';

export const Container = styled.form`

    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: .25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }

        & + input{
            margin-top: 1rem;
        }
    }

    input:focus{
        outline: none;
    }

    button[type="submit"]{
        width: 100%;
        background: var(--green);
        padding: 0 1.5rem;
        height: 4rem;
        color: var(--shape);
        border: 0;
        border-radius: 0.25rem;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1.5rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);

        }
    }

`