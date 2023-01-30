import {
  ChangeEvent,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

export type Props = {
  /**
   * Rotulo da entrada
   */
  label: string
  /**
   * Utiliza o `name` tanto para o id do input quanto para o envio do formulario
   */
  name: string
  /**
   * defina se o input esta desativado
   */
  disabled?: boolean
  /**
   * Callback que sera chamado ao mudar o input
   */
  onChange?: (
    value: string,
    event: ChangeEvent<HTMLInputElement>
  ) => any
  /**
   * Mensagem de erro
   */
  errorMessage?: string
  /**
   * Você pode definir um valor padrão aqui
   */
  value?: string
  /**
   * Defina um icone para o input, EX: https://react-icons.github.io/react-icons
   */
  icon?: ReactNode
  /**
   * `as` é `text` por padrão pode ser alterado para `textarea` que é util em casos de textos longos
   */
  as?: 'input' | 'textarea'
  /**
   * Usado para ter uma `ref` no react
   */
  reference?: HTMLInputElement | null
  /**
   * Aqui pode colocar todos outros metadados do input não listado aqui
   */
  meta?: Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'crossOrigin'
  >
}
