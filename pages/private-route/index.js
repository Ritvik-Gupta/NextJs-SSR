import { useRouter } from "next/router"

export default () => {
	const router = useRouter()
	console.log("User: ", router.query.user)

	return (
		<>
			<h1> Private Route Information </h1>
			<h2>User is {!router.query.user ? "not " : " "}authorized to visit this page</h2>
		</>
	)
}
