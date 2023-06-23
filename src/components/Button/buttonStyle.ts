import { css } from "@emotion/css";

type Props = {
  color: string
}

export const primary = ({ color }: Props) => css`
border-width: 2px;
border-radius: 8px;

background-color: ${color} ;
border-color: ${color};
color: white;
:hover {
  opacity: 0.7;
}
:disabled {
  pointer-events: none;
  background-color: #aaaaaa;
  border-color: #aaaaaa;
  opacity: 1;
}
`
export const secondary = ({ color }: Props) => css`
  border-width: 2px;
  border-radius: 9999px;

  background-color: white;
  border-color: ${color};
  color: ${color};

  :disabled {
    pointer-events: none;
    background-color: #aaaaaa;
    border-color: #aaaaaa;
    color: white;
  }
`
export const thirdly = () => css`
  background-color: white;
  border-width: 1px;
  border-radius: 9999px;
  color: #4c4b4b;
  border-color: #eeeeee;

  :disabled {
    pointer-events: none;
    background-color: #aaaaaa;
    color: white;
  }
`
