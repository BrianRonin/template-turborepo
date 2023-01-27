import {
  ButtonHTMLAttributes,
  LegacyRef,
  MouseEvent,
  ReactNode,
} from 'react'

export interface Settings {
  children?: ReactNode
  /**
   * Defina se o botão esta ativado.
   * carregara `custom.enabled` quando ativo e
   * `custom.disabled` quando desativado
   */
  disabled?: boolean
  /**
   * Callback quando for clicado recebendo `MouseEvent`
   */
  onClick?: (
    e: MouseEvent<HTMLButtonElement>
  ) => any
  /**
   * Icone
   */
  icon?: ReactNode
  /**
   * Referência
   */
  ref?: LegacyRef<HTMLButtonElement>
  /**
   * Customize a cor e fundo de quando estiver `Ativado` e `Desativado`
   */
  custom?: Custom
  /**
   * Outline
   */
  outline?: boolean
  /**
   * Direção do icone
   */
  iconDirection?: 'left' | 'right'
  /**
   * Adicione metadados diretamente ao componente, cuidado selecionar metadados já utilizos
   */
  meta?: ButtonHTMLAttributes<HTMLButtonElement>
}

export interface Custom {
  /**
   * Configure a cor e fundo do botão quando estiver desativado
   */
  enabled: {
    color: string
    bg: string
  }
  /**
   * Configure a cor e fundo do botão quando estiver ativo
   */
  disabled: {
    color: string
    bg: string
  }
}

export interface Props extends Settings {
  /**
   * Customização do botão para quando "isLoading" for verdadeiro
   */
  loadingSettings?: Settings
  /**
   * Quando true o componente renderizara o "loadingSettings"
   */
  isLoading?: boolean
}
