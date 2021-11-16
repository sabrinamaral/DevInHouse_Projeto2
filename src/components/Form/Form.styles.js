import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40rem;
    padding: .8rem;
    background-color: rgba(233, 236, 239, 0.5);

    label {
        margin-top: 1rem;
        align-self: flex-start;
        margin-left: 10rem;
    }

    input {
        width: 50%;
        margin-top: .5rem;   
    }
    button {
        width: 50%;
    }
`;

export const StyledTextInput = styled.textarea`
    width: 50%;
	padding: 16px;
	background-color: #edf2f7;
	border: none;
	margin-bottom: 16px;
	font-size: 14px;
	border: 2px solid #a0aec0;
	box-sizing: border-box;
	height: 150px;
`;