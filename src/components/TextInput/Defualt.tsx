import { css } from '@emotion/css'
import { ChangeEvent, FC, ReactNode } from 'react'
import { CircleX } from 'tabler-icons-react'
import { beforeStyle, buttonContainerStyle, buttonStyle, descriptionStyle, errorMessageStyle, inputStyle, inputWrapperStyle, labelStyle } from './defaultStyle'

type Props = {
  type?: "text" | "number" | "password"
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
}

export const TextInput: FC<Props> = ({
  type = "text",
  value = "",
  defaultValue = "",
  placeholder = "",
  onChange = () => { },
  onDelete = () => { },
  before,

  label,
  labelId,
  description,
  error,
  errorMessage = "error"
}) => {
  const color = "#029CFD"
  return (
    <>
      <div className={css`
      display: flex;
      flex-direction: column;
    `}>
        {label &&
          <label
            id={labelId}
            className={css`${labelStyle}`}
          >{label}</label>
        }
        {description &&
          <p className={css`${descriptionStyle}`}
          >{description}</p>
        }
        <div className={css`${inputWrapperStyle(error, color)}`}>
          {before &&
            <div className={css`${beforeStyle(error)}`}>
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
            className={css`${inputStyle(error, color)}`}
          />
          <div className={css`${buttonContainerStyle}`}>
            <button
              onClick={onDelete}
              className={css`${buttonStyle}`}
            >
              {value && <CircleX color='#aaa' />}
            </button>
          </div>
        </div>
        <p className={css`${errorMessageStyle(error)}`}>
          {errorMessage}
        </p>
      </div>
    </>
  )
}
