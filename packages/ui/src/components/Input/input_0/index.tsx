import { ChangeEvent } from 'react'
import * as S from './styles'
import * as T from './types'
export * as T0Input from './types'
export * as S0Input from './styles'
export * as M0Input from './mock'

import { AiFillCloseCircle } from 'react-icons/ai'
import { useState } from 'react'

export const C0Input = ({
  label,
  name,
  disabled = false,
  onChange,
  errorMessage = '',
  value = '',
  icon = false,
  as = 'input',
  meta,
}: T.Props) => {
  const [hasValue, setHasValue] = useState(false)
  const [inputValue, setInputValue] =
    useState(value)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const inputValue = e.target.value
    if (inputValue) {
      onChange && onChange(inputValue, e)
      !hasValue && setHasValue(true)
      setInputValue(inputValue)
    } else {
      cleanInput()
    }
  }

  const cleanInput = () => {
    setInputValue('')
    setHasValue(false)
  }

  return (
    <S.Main>
      <S.inputContainer
        errorMesage={errorMessage}
        hasIcon={!!icon}
      >
        <S.Input
          {...meta}
          name={name}
          id={name}
          disabled={disabled}
          placeholder={label}
          errorMessage={errorMessage}
          value={inputValue}
          as={as}
          onChange={handleChange}
        />
        <S.Label htmlFor={name} element={as}>
          {label}
        </S.Label>
        {!!icon && as !== 'textarea' && icon}
        {!icon &&
          as !== 'textarea' &&
          hasValue && (
            <AiFillCloseCircle
              onClick={cleanInput}
            />
          )}
      </S.inputContainer>
      {!!errorMessage && (
        <S.ErrorMessage>
          {errorMessage}
        </S.ErrorMessage>
      )}
    </S.Main>
  )
}
