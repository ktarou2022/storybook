
import { css } from '@emotion/css'
import { ChangeEvent, FC, ReactNode, useState } from 'react'
import { Eye, EyeOff } from 'tabler-icons-react'
import { beforeStyle, buttonContainerStyle, buttonStyle, descriptionStyle, errorMessageStyle, inputStyle, inputWrapperStyle, labelStyle } from './defaultStyle'

type Props = {
  color?: string
  value?: string
  defaultValue?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  before?: ReactNode

  label?: string
  labelId?: string
  description?: string
  error?: boolean
  errorMessage?: string
  withAsterisk?: true
}

export const PasswordInput: FC<Props> = ({
  color = "#029CFD",
  value = "",
  defaultValue = "",
  placeholder = "",
  onChange = () => { },
  before,

  label = "",
  labelId,
  description = "",
  error,
  errorMessage = "error",
  withAsterisk
}) => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <div className={css`
      display: flex;
      flex-direction: column;
    `}>
        {label &&
          <label
            id={labelId}
            className={labelStyle}
          >
            {label}
            <span className={css`
              ${labelStyle}
              color: #fa5252;
            `}>{withAsterisk ? " *" : ""}</span>

          </label>
        }
        {description &&
          <p className={descriptionStyle}
          >{description}</p>
        }
        <div className={inputWrapperStyle(error, color)}>
          {before &&
            <div className={beforeStyle(error)}>
              {before}
            </div>
          }
          <input
            id={labelId}
            type={toggle ? "text" : "password"}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            className={inputStyle(error, color)}
          />
          <div className={buttonContainerStyle}>
            <button
              onClick={handleToggle}
              className={buttonStyle(color)}
            >
              {value && !toggle && <EyeOff color='#aaa' size={16} />}
              {value && toggle && <Eye color='#aaa' size={16} />}
            </button>
          </div>
        </div>
        <p className={errorMessageStyle(error)}>
          {errorMessage}
        </p>
      </div>
    </>
  )
}
