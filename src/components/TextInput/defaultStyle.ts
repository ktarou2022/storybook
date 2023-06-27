import { css } from "@emotion/css";

export const labelStyle = css`
  font-size: larger;
  font-weight: 700;
`

export const descriptionStyle = css`
  font-size: small;
  color: #555;
  margin-bottom: 4px;
`

export const inputWrapperStyle = (error?: boolean, color?: string) => css`
  outline: 2px solid ${!error ? "#FFF" : "#fa5252"};
  border: 1px solid #aaa;
  border-radius: 8px;
  padding: 0px 8px;
  display: flex;

  :focus-within {
    outline-color: ${!error ? color : "#fa5252"};
  }
`
export const beforeStyle = (error?: boolean) => css`
  display: flex;
  align-items: center;
  padding-right: 8px;
  color: ${!error ? "#aaa" : "#fa5252"};
`

export const inputStyle = (error?: boolean, color?: string) => css`
  width: 100%;
  padding: 4px 4px;
  color: ${error && "#fa5252"};

  ::placeholder {
    color: ${!error ? "#aaa" : "#fa5252"};
  }
  :focus-visible {
    color: ${color};
    outline: none;
  }
`

export const buttonContainerStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const buttonStyle = (color?: string) => css`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline-color: ${color};
  }
`
export const errorMessageStyle = (error?: boolean) => css`
  visibility: ${error ? "visible" : "hidden"};
  color: #fa5252;
`
