import styled, { css } from 'styled-components'

import { Flex } from '@siakit/layout'

interface HeaderButtonProps {
  variant: 'purple' | 'yellow' | 'amber200' | 'amber300'
}

export const HeaderContainer = styled.header`
  height: 5rem;
  background: ${({ theme }) => theme.colors['base-background']};
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  border-bottom: 2px solid ${({ theme }) => theme.colors['base-button']};

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const HeaderButton = styled.button<HeaderButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-width: 2.3rem;
  height: 2.3rem;
  border-radius: 6px;
  border: none;
  padding: 0 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  cursor: inherit;

  span {
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);
    color: ${({ theme }) => theme.colors['base-white']};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
  }

  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    span {
      background: ${theme.colors[`brand-${variant}-dark`]};
    }
  `}

  ${({ variant, theme }) =>
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors[`brand-purple`]};
      }
    `}
`

export const LogoName = styled.a`
  font-weight: bold;
  color: ${({ theme }) => theme.colors['violet-700']};
`

export const Logo = styled.div`
  color: ${({ theme }) => theme.colors['violet-500']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.textSizes['text-bold-s']};
`

export const Container = styled(Flex)`
  padding: 10px 0px;
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
