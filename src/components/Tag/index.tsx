import type { ReactNode } from 'react'
import { TagContainer } from './style'

type Props = {
  children?: ReactNode
}

const Tag = ({ children }: Props) => {
  return (
    <TagContainer>
      <span>{children}</span>
    </TagContainer>
  )
}

export default Tag
