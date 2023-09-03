import { Button } from '@siakit/button'
import { keyframes, styled } from '@siakit/core'
import { Flex } from '@siakit/layout'
import { Text } from '@siakit/text'

const scaleRight = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(150px)',
  },

  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

const scaleLeft = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translateX(-150px)',
  },

  '100%': {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const RBOTText = styled(Text, {
  fontWeight: '$bold',
  color: '$red11',
  animation: `${scaleRight} 2.5s ease 0s 1 normal both`,
})

export const ButtonAnimation = styled(Button, {
  animation: `${scaleLeft} 2.5s ease 0s 1 normal both`,
})

export const FlexAnimated = styled(Flex, {
  animation: `${scaleRight} 2.5s ease 0s 1 normal both`,
})
