import { StyledInput } from "./Search.styles";

export const Search = (props) => {
    const { type, placeholder, value, onChange } = props;
    return(
        <>
            <StyledInput 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} />
        </>
    )
}