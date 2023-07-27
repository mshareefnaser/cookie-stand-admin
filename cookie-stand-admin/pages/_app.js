import '@/styles/globals.css'
import {AuthProvider} from '../contexts/auth'


export default function App({ Component, pageProps }) {
  <AuthProvider>
  return <Component {...pageProps} />
</AuthProvider>
}
