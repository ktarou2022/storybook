import { css } from '@emotion/css'
import { FC, ReactNode } from 'react'
import { primary, secondary, thirdly } from './buttonStyle'

type Props = {
  size?: "sm" | "md" | "lg"
  children?: ReactNode
  disabled?: boolean
  color?: string
  mode?: "primary" | "secondary" | "thirdly"
  type?: "button" | "submit"
  onClick?: () => void
}

export const Button: FC<Props> = ({
  size = "md",
  children = "button",
  mode = "primary",
  color = '#067bd4',
  type = "button",
  disabled = false,
  onClick
}) => {
  const styles = {
    primary: primary({ color }),
    secondary: secondary({ color }),
    thirdly: thirdly()
  }

  const sizes = {
    sm: css`
      min-width: 56px;
      font-size: 0.5rem;
      padding: 1px 8px;
    `,
    md: css`
      min-width: 64px;
      font-size: 1rem;
      padding: 2px 16px;
    `,
    lg: css`
      min-width: 128px;
      font-size: 2rem;
      padding: 4px 24px;
    `
  }
  return (
    <>
      <button
        type={type}
        disabled={disabled}
        className={css`
          display: flex;
          justify-content: center;
          align-items: center;

          box-shadow:  0px 2px 8px -4px #777777;
          ${styles[`${mode}`]}
          ${sizes[`${size}`]}
          :active {
            box-shadow: none;
          }
       `}
        onClick={onClick}
      >{children}</button>
    </>
  )
}
