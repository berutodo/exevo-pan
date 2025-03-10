import { useTranslations, templateMessage } from 'contexts/useTranslation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { Shine } from 'components/Atoms'
import { ExevoPanIcon } from 'assets/svgs'
import { routes } from 'Constants'

export const ExevoProCTA = () => {
  const {
    translations: { common },
  } = useTranslations()
  const { status, data } = useSession()

  const displayCTA = status !== 'loading' && !data?.user.proStatus

  if (!displayCTA) return null

  return (
    <Link
      className="bg-surface text-onSurface clickable animate-fadeIn z-71 border-1 border-separator/50 text-s fixed bottom-3 left-[calc(100vw-12px)] flex items-center gap-2 whitespace-nowrap rounded-md border-solid px-3 py-2 shadow md:bottom-6 md:left-[calc(100vw-24px)]"
      href={routes.EXEVOPRO}
      style={{ transform: 'translateX(-100%)' }}
    >
      <Shine animationIterationCount="infinite" width={60} />

      <ExevoPanIcon width={18} height={18} />
      <span>
        {templateMessage(common.exevoProCTA, {
          exevoPro: (
            <strong className="rare-gradient-text ml-[1px] tracking-wide">
              Exevo Pro
            </strong>
          ),
        })}
      </span>
    </Link>
  )
}

export default ExevoProCTA
