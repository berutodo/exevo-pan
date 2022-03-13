import { Home } from 'modules/Blog'
import { DEFAULT_PAGINATION_OPTIONS } from 'shared-utils/dist/contracts/BlogFilters/defaults'
import { GetStaticProps } from 'next'
import { useTranslations } from 'contexts/useTranslation'
import { buildUrl } from 'utils'
import Head from 'next/head'
import { BlogClient } from 'services'
import { Main, Ads } from 'templates'
import { routes, jsonld } from 'Constants'
import { common, blog } from 'locales'

const pageUrl = buildUrl(routes.BLOG)

type Props = {
  initialPosts: BlogPost[]
}

export default function PostPage({ initialPosts }: Props): JSX.Element {
  const { translations } = useTranslations()

  const TITLE = translations.blog.Meta.title
  const DESCRIPTION = translations.blog.Meta.description

  return (
    <>
      <Head>
        <title>{TITLE} - Exevo Pan</title>
        <meta name="title" content={TITLE} />
        <meta property="og:title" content={TITLE} />
        <meta property="twitter:title" content={TITLE} />

        <meta name="description" content={DESCRIPTION} />
        <meta property="twitter:description" content={DESCRIPTION} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />

        <link rel="canonical" href={pageUrl} />
        <meta property="og:url" content={pageUrl} />
        <meta property="twitter:url" content={pageUrl} />

        <link rel="alternate" hrefLang="en" href={pageUrl} />
        <link
          rel="alternate"
          hrefLang="pt"
          href={buildUrl(routes.BLOG, 'pt')}
        />
        <link
          rel="alternate"
          hrefLang="es"
          href={buildUrl(routes.BLOG, 'es')}
        />
        <link
          rel="alternate"
          hrefLang="pl"
          href={buildUrl(routes.BLOG, 'pl')}
        />
        <link rel="alternate" hrefLang="x-default" href={pageUrl} />

        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: jsonld.standard,
          }}
        />
      </Head>

      <Main>
        <Home
          initialIndex={DEFAULT_PAGINATION_OPTIONS.pageIndex + 1}
          initialPosts={initialPosts}
        />
        <Ads.FooterBanner />
      </Main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const allBlogPosts = await BlogClient.getEveryPostLocale({
    pageSize: DEFAULT_PAGINATION_OPTIONS.pageSize,
  })

  return {
    props: {
      initialPosts: allBlogPosts[locale as RegisteredLocale],
      translations: {
        common: common[locale as RegisteredLocale],
        blog: blog[locale as RegisteredLocale],
      },
    },
    revalidate: 60000,
  }
}
