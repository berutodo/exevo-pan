/* eslint-disable react/no-danger */
import { memo } from 'react'
import { useTranslations, templateMessage } from 'contexts/useTranslation'
import clsx from 'clsx'
import { Tooltip } from 'components/Organisms'
import { CheckIcon } from 'assets/svgs'
import { ExevoProLink, Text } from 'components/Atoms'
import { auctionEstimations } from 'Constants'

const Heading = ({ className, ...props }: JSX.IntrinsicElements['p']) => (
  <p
    className={clsx(
      className,
      'flex flex-wrap items-center justify-center gap-2',
    )}
    {...props}
  />
)

const TooltipUl = ({
  ...props
}: Omit<JSX.IntrinsicElements['ul'], 'className'>) => (
  <ul
    className="marker:text-rare ml-4 grid list-disc justify-items-start gap-1"
    {...props}
  />
)

export const Li = ({
  className,
  children,
  ...props
}: JSX.IntrinsicElements['li']) => (
  <li className={clsx('flex items-center gap-1', className)} {...props}>
    <CheckIcon className="fill-greenHighlight shrink-0" />
    {children}
  </li>
)

type PitchProps = {
  proStatus: boolean
}

const Pitch = ({ proStatus }: PitchProps) => {
  const {
    translations: { dashboard },
  } = useTranslations()

  return (
    <div className="grid place-items-center gap-8">
      <div className="grid place-items-center gap-2">
        <Heading>
          {proStatus ? dashboard.Pitch.thankYou : dashboard.Pitch.upgradeNow}{' '}
          <ExevoProLink className="text-2xl tracking-wide">🧙‍♂️</ExevoProLink>
        </Heading>
        <p>
          {proStatus
            ? dashboard.Pitch.enjoyFeatures
            : dashboard.Pitch.exclusiveFeatures}
        </p>
      </div>

      <div className="text-tsm grid gap-4">
        <ul className="grid gap-2">
          <Li>{dashboard.Pitch.features.tcInvested}</Li>
          <Li>
            {templateMessage(dashboard.Pitch.features.exclusiveFilters, {
              auctionFilters: (
                <Tooltip
                  offset={[0, 6]}
                  content={
                    <div className="grid place-items-start justify-items-start gap-3">
                      <TooltipUl>
                        <li>{dashboard.Pitch.filtersTooltip.tc}</li>
                        <li>{dashboard.Pitch.filtersTooltip.store}</li>
                        <li>{dashboard.Pitch.filtersTooltip.rareItems}</li>
                        <li>{dashboard.Pitch.filtersTooltip.soulwar}</li>
                        <li>{dashboard.Pitch.filtersTooltip.primalOrdeal}</li>
                      </TooltipUl>
                    </div>
                  }
                >
                  <strong className="underline decoration-dashed underline-offset-4">
                    {dashboard.Pitch.features.auctionFilters}
                  </strong>
                </Tooltip>
              ),
            })}
          </Li>
          <Li>
            {templateMessage(dashboard.Pitch.features.exclusiveBosses, {
              bossTracker: (
                <Tooltip
                  offset={[0, 6]}
                  content={
                    <TooltipUl>
                      <li>The Pale Count</li>
                      <li>Shlorg</li>
                      <li>Man in the Cave</li>
                      <li>Ocyakao</li>
                      <li>The Welter</li>
                      <li>Yeti</li>
                    </TooltipUl>
                  }
                >
                  <strong className="underline decoration-dashed underline-offset-4">
                    {dashboard.Pitch.features.bossTracker}
                  </strong>
                </Tooltip>
              ),
            })}
          </Li>
          <Li>
            {templateMessage(dashboard.Pitch.features.discounts, {
              auctionHighlighting: (
                <strong>{dashboard.Pitch.features.auctionHighlighting}</strong>
              ),
            })}
          </Li>
          <Li>
            {templateMessage(dashboard.Pitch.features.bidNotifications, {
              notifications: (
                <strong>{dashboard.Pitch.features.notifications}</strong>
              ),
            })}
          </Li>
          <Li>
            {templateMessage(dashboard.Pitch.features.privateGroups, {
              private: <strong>{dashboard.Pitch.features.private}</strong>,
            })}
          </Li>
          <Li>
            {templateMessage(dashboard.Pitch.features.estimate, {
              maxEstimation: (
                <Text.TibiaCoin value={auctionEstimations.MAX_FREE_VALUE} />
              ),
            })}
          </Li>
        </ul>
        <p className="text-right">{dashboard.Pitch.more}</p>
      </div>

      {!proStatus && (
        <Heading>
          {dashboard.Pitch.payOnce}{' '}
          <strong className="text-2xl">{dashboard.Pitch.forever} 🙌</strong>
        </Heading>
      )}
    </div>
  )
}

export default memo(Pitch)
