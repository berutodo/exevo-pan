import styled from 'styled-components'
import { Skeleton } from 'components/Atoms'
import { Head as BaseHead } from '../Parts/Head/styles'
import { LabeledTextBox as BaseLabeledTextBox } from '../Parts/styles'

export const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const Head = styled(BaseHead)`
  align-items: center;
  gap: 0px;
`

export const HeadInfo = styled.div`
  margin: 0 16px;
  width: 100%;
`

export const LabeledTextBox = styled(BaseLabeledTextBox)`
  align-items: center;
  height: 36px;
  > div {
    width: 100%;
  }
`

export const Square = styled(Skeleton)`
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 5px;
`
export const Text = styled(Skeleton)`
  height: 12px;
`

export const Flag = styled(Skeleton)`
  margin-right: 4px;
  width: 16px;
  height: 10px;
`

export const Circle = styled(Skeleton)`
  width: 16px;
  height: 16px;
  border-radius: 50%;
`

export const ItemWrapper = styled.div`
  margin-bottom: 12px;
  display: flex;
  justify-content: space-around;
  width: 100%;
`

export const SkillWrapper = styled.div`
  margin-bottom: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 8px;
`

export const SkillItem = styled.div`
  display: flex;
  align-items: baseline;
  * {
    display: block;
  }
`

export const Skillbox = styled(Square)`
  margin-right: 6px;
  width: 32px;
  height: 22px;
`

export const ImbuementsIcon = styled(Square)`
  margin-right: 4px;
  width: 18px;
  height: 18px;
`

export const Charm = styled(Skeleton)`
  border-radius: 12px;
  width: 70px;
  height: 26px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`
