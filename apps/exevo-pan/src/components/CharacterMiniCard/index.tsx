import { useTranslations } from 'contexts/useTranslation'
import clsx from 'clsx'
import { SpritePortrait } from 'components/Atoms'
import ExternalIcon from 'assets/svgs/external.svg'
import { CharacterMiniCardProps } from './types'

const DEFAULT_OUTFIT_SRC =
  'https://static.tibia.com/images/charactertrade/outfits/128_0.gif'

const CharacterMiniCard = ({
  isCard = false,
  displayServer = false,
  outfitSrc = DEFAULT_OUTFIT_SRC,
  characterData,
  characterName,
  forceSubtitle,
  linkUrl,
  className,
  ...props
}: CharacterMiniCardProps): JSX.Element => {
  const {
    translations: { common },
  } = useTranslations()

  const name = characterName ?? (characterData as SingleCharacterData).name

  return (
    <div
      className={clsx(
        'character-mini-card flex items-center gap-4',
        isCard && 'card',
        className,
      )}
      {...props}
    >
      <SpritePortrait
        offset
        width={64}
        height={64}
        src={outfitSrc}
        alt={name}
        title={name}
      />
      <div>
        <p className="text-primaryHighlight flex items-center text-base font-bold">
          {name}
          {linkUrl && (
            <a
              href={linkUrl}
              target="_blank"
              rel="noreferrer noopener external"
              onClick={(event) => event.stopPropagation()}
              className="text-none ml-1"
            >
              <ExternalIcon className="clickable fill-onSurface mt-[-2px] h-7 w-7 rounded p-[2px]" />
              {common.CharacterTooltipLabel}
            </a>
          )}
        </p>
        <span className="text-tsm text-onSurface font-light tracking-wider">
          {forceSubtitle ??
            (characterData &&
              `Level ${characterData.level} - ${characterData.vocation}${
                displayServer ? ` (${characterData.world})` : ''
              }`)}
        </span>
      </div>
    </div>
  )
}

export default CharacterMiniCard
