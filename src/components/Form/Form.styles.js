import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    margin-right: auto;
    margin-left: auto;
    padding: .8rem;

    label {
        margin-top: 1rem;
        align-self: flex-start;
        margin-left: 8rem;
    }

    input {
        width: 60%;
        margin-top: .5rem;   
    }
    button {
        width: 60%;
    }
`;

export const StyledTextArea = styled.textarea`
    width: 60%;
    height: 10rem;
	padding: 1.1rem;
	background-color: #edf2f7;
	margin-bottom: 1.1rem;
	font-size: 1rem;
	border: 2px solid #ccc;
	box-sizing: border-box;
`;

export const StyledDiv = styled.div`
    width: 60%;
    margin: 0.2rem auto;
    border: 2px solid #ccc;
    border-radius: .4rem;
    padding: 1.1rem;
	background-color: #edf2f7;
    overflow-wrap: anywhere;
`;

export const StyledH4 = styled.h4`
    padding: .5rem;
    margin: 0;
    font-size: 1rem;
`;

export const StyledP = styled.p`
    padding: .5rem;
    margin: 0;
    font-size: .9rem;

`;