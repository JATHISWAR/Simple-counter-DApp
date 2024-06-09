import type { AppProps } from "next/app"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import "../styles/globals.css"
import { Sepolia } from "@thirdweb-dev/chains"

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThirdwebProvider activeChain={Sepolia} clientId="441c50e709c92f69229e26b29306d10c">
			<Component {...pageProps} />
		</ThirdwebProvider>
	)
}

export default MyApp