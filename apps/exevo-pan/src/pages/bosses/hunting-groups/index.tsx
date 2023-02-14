import Head from 'next/head'
import { useState } from 'react'
import { PreviewImageClient } from 'services'
import { DrawerFieldsClient } from 'services/server'
import { GetStaticProps } from 'next'
import { Hero } from 'templates'
import { Template } from 'modules/BossHunting'
import { Button, Tabs, Input, Paginator } from 'components/Atoms'
import { Select } from 'components/Organisms'
import {
  CreateGuildDialog,
  GuildList,
} from 'modules/BossHunting/modules/HuntingGroups'
import { AddIcon } from 'assets/svgs'
import { useTranslations } from 'contexts/useTranslation'
import { caller } from 'pages/api/trpc/[trpc]'
import { buildUrl, buildPageTitle, loadRawSrc } from 'utils'
import { routes, jsonld } from 'Constants'
import { common, bosses } from 'locales'

type SerializablePublicHuntingGroup = Omit<PublicHuntingGroup, 'createdAt'> & {
  createdAt: number
}

type HuntingGroupsProps = {
  serializableInitialGuildList: {
    page: SerializablePublicHuntingGroup[]
    count: number
  }
  serverOptions: Option[]
}

const heroSrc = loadRawSrc('/huntingGroups.png')
const pagePath = routes.BOSSES.HUNTING_GROUPS
const pageUrl = buildUrl(pagePath)

export default function HuntingGroupsPage({
  serializableInitialGuildList,
  serverOptions,
}: HuntingGroupsProps) {
  const { translations } = useTranslations()

  /* @ ToDo: add title */
  /* const pageName = translations.bossTracker.Meta.title */
  const pageName = 'Hunting Groups'
  const previewSrc = PreviewImageClient.getSrc({
    title: pageName,
    imgSrc: heroSrc,
  })

  const pageTitle = buildPageTitle(pageName)

  const [isOpen, setOpen] = useState(false)
  const guildList = serializableInitialGuildList.page.map(
    ({ createdAt, ...data }) => ({ ...data, createdAt: new Date(createdAt) }),
  )

  const serverFilterOptions: typeof serverOptions = [
    { name: '(any)', value: '' },
    ...serverOptions,
  ]

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
        <meta property="og:type" content="website" />

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
        />
      </Head>

      <Template>
        <Hero offset src={heroSrc} title={pageName} />

        <div className="inner-container grid gap-8 md:-mt-12">
          <Button
            onClick={() => setOpen(true)}
            className="z-1 ml-auto flex w-fit items-center gap-1.5"
          >
            <AddIcon className="-ml-2.5" />
            Create group
          </Button>
          {isOpen && (
            <CreateGuildDialog
              serverOptions={serverOptions}
              onClose={() => setOpen(false)}
            />
          )}

          <section className="grid gap-4">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="grid w-full grid-cols-2 gap-4 sm:max-w-[380px]">
                <Input
                  label="Search by name"
                  placeholder="Hunting group name"
                  allowClear
                />
                <Select
                  label="Search by server"
                  options={serverFilterOptions}
                  defaultValue=""
                />
              </div>

              <Paginator
                className="ml-auto w-fit"
                totalItems={serializableInitialGuildList.count}
                pageSize={20}
              />
            </div>
            <Tabs.Group>
              <Tabs.Panel label="Find groups">
                <GuildList list={guildList} onApply={() => {}} />
              </Tabs.Panel>
              <Tabs.Panel label="My groups">
                <GuildList list={guildList} />
              </Tabs.Panel>
            </Tabs.Group>
          </section>
        </div>
      </Template>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const [unserializableGuildList, serverOptions] = await Promise.all([
    caller.listGuilds({}),
    DrawerFieldsClient.fetchActiveServerOptions(),
  ])

  const serializableInitialGuildList = {
    ...unserializableGuildList,
    page: unserializableGuildList.page.map(({ createdAt, ...data }) => ({
      ...data,
      createdAt: +createdAt,
    })),
  }

  return {
    props: {
      serializableInitialGuildList,
      serverOptions,
      translations: {
        common: common[locale as RegisteredLocale],
        bosses: bosses[locale as RegisteredLocale],
      },
      locale,
    },
  }
}
