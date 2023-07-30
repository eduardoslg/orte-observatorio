import { styled } from 'styled-components'

import { Flex } from '@siakit/layout'

export const Container = styled(Flex)`
  padding: 16px 0px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  &:hover {
    transition: background-color 1s ease;
    background-color: #fde68a;
  }
`
