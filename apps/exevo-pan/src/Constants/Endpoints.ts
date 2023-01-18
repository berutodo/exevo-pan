export const endpoints = {
  CURRENT_AUCTIONS: process.env.NEXT_PUBLIC_AUCTIONS_ENDPOINT as string,
  HISTORY_AUCTIONS: process.env.NEXT_PUBLIC_HISTORY_ENDPOINT as string,
  STATIC_DATA: process.env.NEXT_PUBLIC_STATIC_ENDPOINT as string,
  BLOG_QUERY: process.env.NEXT_PUBLIC_BLOG_ENDPOINT as string,
  BLOG_STATIC: process.env.NEXT_PUBLIC_BLOG_STATIC_ENDPOINT as string,
  BACKOFFICE_API: process.env.NEXT_PUBLIC_BACKOFFICE_ENDPOINT as string,
  WAR_DATA: 'https://exevo-pan-war-data.netlify.app',
  TIBIADATA: 'https://api.tibiadata.com/v2/characters',
  AUCTIONS_ROUTE: '/api/auctions',
  ERROR_REPORT: '/api/error-report',
  PREVIEW_IMAGES: '/api/og',
  FCM_SEND: 'https://fcm.googleapis.com/fcm/send',
  ADMIN: {
    REVENUE: '/api/admin/revenue',
  },
}
