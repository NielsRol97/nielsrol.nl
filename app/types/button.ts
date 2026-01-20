export type ButtonVariant = 'primary' | 'secondary'
export type ButtonType = 'button' | 'anchor'

export type Button = {
  label: string
  variant?: ButtonVariant
  type?: ButtonType

  /* anchor-only */
  href?: string

  /* button-only */
  onClick?: () => void
  disabled?: boolean
}
