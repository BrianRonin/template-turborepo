import { Roboto } from '@next/font/google'
import { GlobalStyles, Theme } from 'ui'
import { AppInitialProps } from 'next/dist/shared/lib/utils'

const myFont = Roboto({
  style: ['normal', 'italic'],
  weight: ['100', '300', '500', '900'],
  subsets: ['latin'],
})

export default function App({
  Component,
  pageProps,
}: {
  Component: any
  pageProps: AppInitialProps
}) {
  return (
    <Theme.Provider>
      <GlobalStyles.default />
      <main
        className={myFont.className as string}
      >
        <Component {...pageProps} />
      </main>
    </Theme.Provider>
  )
}
