import type { AppProps } from 'next/app';
import AppLayout from '@layouts/app-layout';
import '@rambow/ui/globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  )
}
