import { GetServerSideProps } from 'next'
import { BlogClient } from 'services'
import { XmlWrapper, XmlTemplate } from 'utils'
import { routes } from 'Constants'

const Sitemap: React.FC = () => null

const TODAY = new Date()
const NEWLINE = '\n'

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { en: posts } = await BlogClient.getEveryPostLocale({})

  const sitemapContent = `
  ${XmlTemplate({
    route: routes.HOME,
    date: TODAY,
    changefreq: 'always',
  })}
  ${XmlTemplate({
    route: routes.BAZAAR_HISTORY,
    date: TODAY,
    changefreq: 'hourly',
  })}
  ${XmlTemplate({
    route: routes.STATISTICS,
    date: TODAY,
    changefreq: 'daily',
  })}
  ${XmlTemplate({
    route: routes.HIGHSCORES,
    date: TODAY,
    changefreq: 'daily',
  })}
  ${XmlTemplate({
    route: routes.BLOG,
    date: TODAY,
    changefreq: 'daily',
  })}
  ${XmlTemplate({
    route: routes.ADVERTISE,
    date: TODAY,
    changefreq: 'always',
  })}
  
  ${posts
    .map(({ slug, date }) =>
      XmlTemplate({
        route: `${routes.BLOG}/${slug}`,
        date: new Date(date),
        changefreq: 'monthly',
      }),
    )
    .join(NEWLINE)}`

  if (res) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(XmlWrapper(sitemapContent))
    res.end()
  }
  return {
    props: {},
  }
}

export default Sitemap
