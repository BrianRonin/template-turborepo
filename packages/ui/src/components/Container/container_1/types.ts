import { HTMLAttributes, ReactNode } from 'react'

export type Custom = {
  boxShadowOnHover?: 'bg' | 'primary'
  isForm?: boolean
}

export type Props = {
  children: ReactNode
  custom?: Custom
  meta?: HTMLAttributes<HTMLDivElement>
}
