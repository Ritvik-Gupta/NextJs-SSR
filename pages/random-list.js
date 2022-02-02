import { RANDOM_DATA } from "../utils/random-generator"

export default ({ list }) => {
	console.log(list)
	return (
		<>
			<h1>List is :</h1>
			<ul>
				{list.map(elm => (
					<li>{elm}</li>
				))}
			</ul>
		</>
	)
}

export function getStaticProps() {
	return {
		props: {
			list: [...RANDOM_DATA],
		},
		revalidate: 10,
	}
}
