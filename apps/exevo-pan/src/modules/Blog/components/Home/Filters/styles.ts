import styled, { css } from 'styled-components'
import { Switch as BaseSwitch } from 'components/Atoms'
import SearchSvg from 'assets/svgs/search.svg'

export const Wrapper = styled.section`
  padding-top: 8px;
  display: grid;
  gap: 16px;
  flex-shrink: 0;
  max-width: 200px;
`

export const Icon = styled(SearchSvg)`
  width: 24px;
  height: 24px;
  fill: var(--onSurface);
`

export const Title = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;

  font-size: 24px;
  font-weight: 300;
  color: var(--onSurface);
`

export const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 300;
`

export const GroupWrapper = styled.div`
  display: grid;
  gap: 8px;
`

const labelStyle = css`
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.2px;
`

export const Switch = styled(BaseSwitch)`
  ${labelStyle}
`

export const Label = styled.label`
  display: block;
  ${labelStyle}
`

export const TagWrapper = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`
