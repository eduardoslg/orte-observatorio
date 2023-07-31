import { keyframes, styled } from '@siakit/core'

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

export const ButtonContainer = styled('button', {
  all: 'unset',

  cursor: 'pointer',
  fontSize: '$sm',
  fontWeight: '$medium',
  borderRadius: '$md',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 6,

  lineHeight: 0,

  transition: 'background-color 0.150s, color 0.150s',

  animation: `${scaleLeft} 2.5s ease 0s 1 normal both`,

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  svg: {
    width: 16,
    height: 16,
  },

  variants: {
    size: {
      sm: {
        height: 24,
        padding: '0 12px',
        fontSize: '$xs',
        gap: 6,

        svg: {
          width: 12,
          height: 12,
        },
      },
      md: {
        height: 32,
        padding: '0 16px',
      },
      lg: {
        height: 40,
        padding: '0 50px',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
