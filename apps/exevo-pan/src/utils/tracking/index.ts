import { google } from 'Constants'

const pageView = (url: URL): void => {
  window.gtag('config', google.GTM_ID, {
    page_path: url,
  })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

const event = ({ action, category, label, value }: GTagEvent): void => {
  if (typeof window !== undefined) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}

const blogPostView = (slug: string): void =>
  event({
    category: 'blog',
    action: 'PostsView',
    label: slug,
    value: 0,
  })

const filterUsed = (filterKey: string): void =>
  event({
    category: 'auctions',
    action: 'UseFilter',
    label: filterKey,
    value: 0,
  })

export const gtag = {
  pageView,
  blogPostView,
  filterUsed,
}
