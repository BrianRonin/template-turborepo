import { ReactNode } from 'react'

export type Props = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'huge' | 'big' | 'medium' | 'small'
  /**
   * Todas letras maiusculas?
   */
  uppercase?: boolean
  meta?: React.HTMLAttributes<HTMLHeadingElement>
}
