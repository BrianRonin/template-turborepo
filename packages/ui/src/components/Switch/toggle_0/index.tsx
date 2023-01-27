import { useEffect, useState } from 'react'
import * as S from './styles'
import * as T from './types'
export * as S0Toggle from './styles'
export * as M0Toggle from './mock'
export * as T0Toggle from './types'

export const C0Toggle = ({
  text,
  onChange,
  ifChecked,
  ifNoChecked,
  initialValue,
  meta,
}: T.Props) => {
  const [checked, setChecked] = useState(
    initialValue ? initialValue() : false
  )

  useEffect(() => {
    checked &&
      typeof ifChecked === 'function' &&
      ifChecked()

    if (
      !checked &&
      typeof ifNoChecked === 'function'
    )
      ifNoChecked()
    typeof onChange === 'function' &&
      onChange(checked)
  }, [checked])

  const handleChange = () => {
    setChecked((s) => !s)
  }

  return (
    <S.Main>
      <S.Label>
        {text}
        <S.Input
          type={'checkbox'}
          value={text}
          onChange={handleChange}
          checked={checked}
          {...meta}
        />
        <S.Slider></S.Slider>
      </S.Label>
    </S.Main>
  )
}
