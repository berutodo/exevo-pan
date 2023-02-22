import Head from 'next/head'
import { GetServerSideProps, GetServerSidePropsResult } from 'next'
import { useState, useCallback } from 'react'
import { stringify, parse } from 'devalue'
import { getToken } from 'next-auth/jwt'
import { useTranslations } from 'contexts/useTranslation'
import {
  GuildDataProvider,
  GuildDataConsumer,
  ServerSideGuildDataProps,
  Template,
  GuildHero,
  EditGuildDialog,
  MessageBoard,
} from 'modules/BossHunting'
import { prisma } from 'lib/prisma'
import { buildPageTitle } from 'utils'
import { routes } from 'Constants'
import { common, bosses } from 'locales'

type GuildPageProps = {
  serializedGuildData: string
}

export default function GuildPage({ serializedGuildData }: GuildPageProps) {
  const { translations } = useTranslations()

  const [guildDataProps] = useState<ServerSideGuildDataProps>(
    parse(serializedGuildData),
  )

  const [isEditOpen, setIsEditOpen] = useState(false)
  const toggleEditDialog = useCallback(() => setIsEditOpen((prev) => !prev), [])

  /* @ ToDo: add title */
  /* const pageName = translations.bossTracker.Meta.title */
  const pageName = guildDataProps.guild.name
  /* const previewSrc = PreviewImageClient.getSrc({
    title: pageName,
    imgSrc: heroSrc,
  }) */

  const pageTitle = buildPageTitle(pageName)

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta property="og:title" content={pageTitle} />
        <meta property="twitter:title" content={pageTitle} />

        {/* @ ToDo: add meta tags */}
        {/* <meta
      name="description"
      content={translations.bossTracker.Meta.description}
    />
    <meta
      property="twitter:description"
      content={translations.bossTracker.Meta.description}
    />
    <meta
      property="og:description"
      content={translations.bossTracker.Meta.description}
    /> */}
        {/* <meta property="og:type" content="website" />

        <meta key="preview-1" property="og:image" content={previewSrc} />
        <meta key="preview-2" property="twitter:image" content={previewSrc} />

        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="twitter:url" content={pageUrl} />

        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link rel="alternate" hrefLang="pt" href={buildUrl(pagePath, 'pt')} />
        <link rel="alternate" hrefLang="es" href={buildUrl(pagePath, 'es')} />
        <link rel="alternate" hrefLang="pl" href={buildUrl(pagePath, 'pl')} />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: jsonld.standard,
          }}
        /> */}
      </Head>

      <GuildDataProvider {...guildDataProps}>
        <Template>
          <GuildHero />
          <div className="inner-container z-1 relative grid gap-8">
            {isEditOpen && <EditGuildDialog onClose={toggleEditDialog} />}
            <GuildDataConsumer>
              {({ isEditor, guild: { description, messageBoard } }) => (
                <div className="mx-auto grid max-w-full gap-6 sm:w-96 md:w-[540px]">
                  {/* @ ToDo: i18n */}
                  <MessageBoard
                    title="Description"
                    description={description}
                    isEditor={isEditor}
                    addText="Add description"
                    editText="Edit description"
                    onEdit={toggleEditDialog}
                  />
                  {/* @ ToDo: i18n */}
                  <MessageBoard
                    title="Internal message board"
                    description={messageBoard}
                    isEditor={isEditor}
                    addText="Add message"
                    editText="Edit message"
                    onEdit={toggleEditDialog}
                  />
                </div>
              )}
            </GuildDataConsumer>
          </div>
        </Template>
      </GuildDataProvider>
    </>
  )
}

const redirect: GetServerSidePropsResult<any> = {
  redirect: {
    destination: routes.BOSSES.HUNTING_GROUPS,
    permanent: false,
  },
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  query: { guildName },
  locale,
}) => {
  const token = await getToken({ req })

  if (typeof guildName !== 'string') return redirect

  const guild = await prisma.guild.findUnique({
    where: { name: guildName },
    include: { guildMembers: true },
  })

  if (!guild) return redirect

  const { guildMembers } = guild

  const currentMember = guildMembers.find(({ userId }) => userId === token?.id)

  return {
    props: {
      serializedGuildData: stringify({
        currentMember,
        guildMembers: guild.private && currentMember ? guildMembers : [],
        guild: currentMember
          ? guild
          : ({ ...guild, messageBoard: null } as typeof guild),
        memberCount: guildMembers.length,
      }),
      translations: {
        common: common[locale as RegisteredLocale],
        bosses: bosses[locale as RegisteredLocale],
        /* bossTracker: bossTracker[locale as RegisteredLocale], */
      },
      locale,
    },
  }
}
