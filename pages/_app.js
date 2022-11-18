import { Amplify } from 'aws-amplify'
import { AmplifyProvider } from '@aws-amplify/ui-react'
import config from '../src/aws-exports'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure({ ...config, ssr: true })
function MyApp({ Component, pageProps }) {
	return (
        <>
            <h1>ArcaSea Videos</h1>
            <AmplifyProvider>
                <Component {...pageProps} />
            </AmplifyProvider>
        </>
	)
}

export default MyApp
