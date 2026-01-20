export type TextType =
  | 'p'
  | 'span'
  | 'strong'
  | 'em'
  | 'small'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'

export type Text = {
  content: string
  type?: TextType
}
