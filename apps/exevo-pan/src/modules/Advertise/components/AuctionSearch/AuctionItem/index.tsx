import { vocation } from 'shared-utils/dist/vocations'
import CharacterMiniCard from 'components/CharacterMiniCard'
import { useForm } from '../../../contexts/Form'
import * as S from './styles'
import { AuctionItemProps } from './types'

const AuctionItem = ({
  auctionId,
  nickname,
  level,
  vocationId,
  outfitId,
  ...props
}: AuctionItemProps): JSX.Element => {
  const { selectedCharacter } = useForm()

  return (
    <S.Button
      {...props}
      aria-selected={selectedCharacter?.nickname === nickname}
    >
      <CharacterMiniCard
        outfitSrc={`https://static.tibia.com/images/charactertrade/outfits/${outfitId}.gif`}
        characterData={{
          level,
          name: nickname,
          vocation: vocation.getFullName(vocationId, level),
          world: '',
        }}
        linkUrl={`https://www.tibia.com/charactertrade/?subtopic=currentcharactertrades&page=details&auctionid=${auctionId}`}
      />
      <S.Arrow />
    </S.Button>
  )
}

export default AuctionItem
