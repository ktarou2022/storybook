import { css } from '@emotion/css'
import { ChangeEvent, FC, ReactNode } from 'react'
import { CircleX } from 'tabler-icons-react'
import { beforeStyle, buttonContainerStyle, buttonStyle, descriptionStyle, errorMessageStyle, inputStyle, inputWrapperStyle, labelStyle } from './defaultStyle'

type Props = {
  color?: string
  type?: "text" | "number" | "submit"
  value?: string
  defaultValue?: string
  placeholder?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  before?: ReactNode
  onDelete?: () => void

  label?: string
  labelId?: string
  description?: string
  error?: boolean
  errorMessage?: string
  withAsterisk?: true
}

export const TextInput: FC<Props> = ({
  color = "#029CFD",
  type = "text",
  value = "",
  defaultValue = "",
  placeholder = "",
  onChange = () => { },
  onDelete = () => { },
  before,

  label = "",
  labelId,
  description = "",
  error,
  errorMessage = "error",
  withAsterisk
}) => {
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
            type={type}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            onChange={onChange}
            className={inputStyle(error, color)}
          />
          <div className={buttonContainerStyle}>
            <button
              onClick={onDelete}
              className={buttonStyle(color)}
            >
              {value && <CircleX color='#aaa' size={16} />}
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
