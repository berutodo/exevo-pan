/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Smooth, InnerContainer } from 'styles'
import { ReactComponent as ErrorIconSvg } from 'assets/svgs/error.svg'

export const Wrapper = styled.main`
  position: relative;
  z-index: 99;
  width: 100vw;

  * {
    ${Smooth}
  }
`

export const Top = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors?.surface ?? '#FFFFFF'};
`

export const Title = styled.span`
  font-size: 64px;
  font-weight: 700;
  letter-spacing: 8px;
  color: ${({ theme }) => theme.colors?.primary ?? '#3F51B5'};
`

export const Bottom = styled.div`
  padding-top: 6px;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors?.primary ?? '#3F51B5'};
  text-align: center;
`

export const ErrorIcon = styled(ErrorIconSvg)`
  margin-bottom: 32px;
  width: 128px;
  height: 128px;
  fill: ${({ theme }) => theme.colors?.surface ?? '#FFFFFF'};
`

export const Paragraph = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  letter-spacing: 1.5px;
  color: ${({ theme }) => theme.colors?.surface ?? '#FFFFFF'};
`

export const Nav = styled.nav`
  margin-top: 8px;
  ${InnerContainer}
`

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const Li = styled.li`
  margin-top: 12px;

  &:not(:last-child) {
    margin-right: 12px;

    &::after {
      content: '|';
      margin-left: 12px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors?.separator ?? '#B4B4B4'};
    }
  }
`

export const Navigation = styled(NavLink)`
  font-size: 14px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors?.onPrimary ?? '#FFFFFF'};
`
