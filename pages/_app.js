// import '../styles/globals.css'
import { Styles } from "../components/00-settings/Styles"
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
    return (
		<SessionProvider>
			<Styles />
			<Component {...pageProps} />
		</SessionProvider>
	)
}

export default MyApp
