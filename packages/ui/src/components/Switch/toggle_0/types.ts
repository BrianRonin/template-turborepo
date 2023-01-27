import { InputHTMLAttributes } from 'react'

export type Props = {
  text?: string
  /**
   * Callback ao mudar de estado enviando o estado
   */
  onChange?: (checked: boolean) => any
  /**
   * Callback para quando estiver ativado
   */
  ifChecked?: () => any
  /**
   * Callback para quando estiver desativado
   */
  ifNoChecked?: () => any
  /**
   * Inicia ativo ou desativado?
   */
  initialValue?: () => boolean
  /**
   * Metadados extras
   */
  meta?: InputHTMLAttributes<HTMLInputElement>
}
