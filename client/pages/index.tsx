import {
	ConnectWallet,
	Web3Button,
	useContract,
	useSDK,
} from "@thirdweb-dev/react"
import type { NextPage } from "next"
import styles from "../styles/Home.module.css"
import { useEffect, useState } from "react"
import Link from "next/link"

const Home: NextPage = () => {
	const [counter, setCounter] = useState("0")
	const contractAddress = "YOUR_CONTRACT_ADDRESS"
	const { contract } = useContract(contractAddress)
	const sdk = useSDK()

	const address = sdk?.wallet.isConnected()

	async function getCounter() {
		if (!contract) return

		const counter = await contract?.call("getCount")
		setCounter(counter.toString())
	}

	getCounter()

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<h1>
					<Link href="https://thirdweb.com/mumbai/0x269b8Ce971202bEE83788823719108E7742a9d5b">
						Sepolia Counter Dapp
					</Link>
				</h1>
				{contract ? (
					<>
						<p>Simple DApp to Increase and Decrease Counter</p>
						<h3>{counter}</h3>
						<br />
						{address ? (
							<div
								style={{
									display: "flex",
									flexDirection: "column",
									gap: "16px",
								}}
							>
								<Web3Button
									contractAddress={contractAddress}
									action={(contract) => contract?.call("increment")}
								>
									Increment Counter
								</Web3Button>
								<Web3Button
									contractAddress={contractAddress}
									action={(contract) => contract?.call("decrement")}
								>
									Decrement Counter
								</Web3Button>
							</div>
						) : (
							<ConnectWallet />
						)}
					</>
				) : (
					<p>Loading contract...</p>
				)}
			</main>
		</div>
	)
}

export default Home
