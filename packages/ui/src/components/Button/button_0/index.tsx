import { useTheme } from '@emotion/react'
import React, { useEffect, useState } from 'react'

import * as S from './styles'
import * as T from './types'
export * as S0Button from './styles'
export * as M0Button from './mock'
export * as T0Button from './types'

export const C0Button: React.FC<T.Props> = (
  userSettings
) => {
  const theme = useTheme()

  const preset: T.Settings = {
    iconDirection: 'left',
    children: undefined,
    custom: {
      enabled: {
        color: theme.colors.text[1],
        bg: theme.colors.primary[4],
      },
      disabled: {
        color: theme.colors.text[1],
        bg: theme.colors.primary[4],
      },
    },
    outline: false,
    disabled: false,
  }

  const [
    {
      children,
      custom,
      disabled,
      icon,
      iconDirection,
      meta,
      onClick,
      outline,
      ref,
    },
    setSettings,
  ] = useState({
    ...preset,
    ...userSettings,
  })

  useEffect(() => {
    userSettings.isLoading
      ? setSettings({
          ...preset,
          ...userSettings,
        })
      : setSettings({
          ...preset,
          ...userSettings,
        })
    return () => setSettings({})
  }, [userSettings, theme])

  const onlyIcon =
    typeof children === 'undefined' &&
    typeof icon !== 'undefined'

  const styles: T.Custom = custom
    ? custom
    : {
        enabled: {
          color: theme.colors.text[0],
          bg: theme.colors.primary[3],
        },
        disabled: {
          color: theme.colors.text[1],
          bg: theme.colors.primary[4],
        },
      }

  return (
    <>
      <S.Main
        disabled={disabled}
        onClick={onClick}
        ref={ref}
        onlyIcon={onlyIcon}
        custom={styles}
        outline={!!outline}
        iconDirection={iconDirection ?? 'left'}
        {...meta}
      >
        {!!icon &&
          iconDirection === 'left' &&
          icon}
        {children}
        {!!icon &&
          iconDirection === 'right' &&
          icon}
      </S.Main>
    </>
  )
}
