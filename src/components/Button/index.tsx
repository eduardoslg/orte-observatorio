import { ComponentProps, forwardRef } from 'react'

import { Color, useTheme } from '@siakit/core'

import { ButtonContainer } from './styles'

type ButtonProps = {
  colorScheme?: Color
  variant?: 'primary' | 'secondary' | 'ghost'
} & ComponentProps<typeof ButtonContainer>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ colorScheme, variant, children, css, ...props }, ref) => {
    const { color } = useTheme()

    function neutralColor(): string {
      const currentColor = colorScheme ?? color ?? ''

      if (['sky', 'mint', 'lime', 'yellow', 'amber'].includes(currentColor)) {
        return '$black'
      }

      return '$white'
    }

    function getColor(scale: number): string {
      if (colorScheme) {
        return `$${colorScheme}${scale}`
      }

      return `$primary${scale}`
    }

    return (
      <ButtonContainer
        ref={ref}
        css={
          variant === 'ghost'
            ? {
                ...css,
                backgroundColor: 'transparent',
                color: getColor(11),

                '&:hover:not([disabled])': {
                  backgroundColor: getColor(4),
                },
              }
            : variant === 'secondary'
            ? {
                ...css,
                backgroundColor: getColor(4),
                color: getColor(11),

                '&:hover:not([disabled])': {
                  backgroundColor: getColor(5),
                },
              }
            : {
                ...css,
                backgroundColor: getColor(9),
                color: neutralColor(),

                '&:hover:not([disabled])': {
                  backgroundColor: getColor(10),
                },
              }
        }
        {...props}
      >
        {children}
      </ButtonContainer>
    )
  },
)
