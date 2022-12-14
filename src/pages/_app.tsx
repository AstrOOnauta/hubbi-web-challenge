import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'

import 'react-toastify/dist/ReactToastify.css'

import Background from '../components/Background'
import GlobalContext from '../shared/context'

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalContext>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <Background />
      <Header />
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default MyApp
