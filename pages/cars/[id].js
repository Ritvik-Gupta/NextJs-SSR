import Head from "next/head"
import { useRouter } from "next/router"
import styles from "../../styles/Home.module.css"
import { CARS } from "../../utils/cars-info"

export default function Car({ car }) {
	const router = useRouter()
	const { id } = router.query
	return (
		<div className={styles.container}>
			<Head>
				<title>
					{car.color} {car.id}
				</title>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>{id}</h1>

				<img src={car.image} width='300px' />
			</main>
		</div>
	)
}

// export async function getServerSideProps({ params }) {
// 	const req = await fetch(`http://localhost:3000/${params.id}.json`)
// 	const data = await req.json()

// 	return {
// 		props: { car: data },
// 	}
// }

export function getStaticProps({ params }) {
	return { props: { car: CARS[params.id] } }
}

export async function getStaticPaths() {
	return {
		paths: Object.keys(CARS).map(carName => ({
			params: {
				id: carName,
			},
		})),
		fallback: false,
	}
}
