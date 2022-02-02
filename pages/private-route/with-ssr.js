export default ({ authUser }) => {
	return (
		<>
			<h1> Private Route Information </h1>
			<h2>{authUser} is authorized to visit this page</h2>
		</>
	)
}

export function getServerSideProps({ query }) {
	console.log(query)

	if (!query.user) return { redirect: { destination: "/", permanent: false } }
	return { props: { authUser: query.user } }
}
