import Head from 'next/head'
import { Main } from 'templates'
import ErrorPage from 'modules/ErrorPage'

export default function Custom404(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Exevo Pan - 404</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <ErrorPage />
      </Main>
    </div>
  )
}
