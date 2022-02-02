import Link from "next/link"
import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"
import Table from "react-bootstrap/Table"

export default ({ albums }) => (
	<Jumbotron>
		<Table striped bordered hover variant='dark'>
			<thead>
				<tr>
					<th className='text-center'>#</th>
					<th className='text-center' colSpan='2'>
						Album Name
					</th>
					<th className='text-center'>Go to</th>
				</tr>
			</thead>
			<tbody>
				{albums.map(album => {
					return (
						<tr key={album.id}>
							<td className='text-center'>{album.id}</td>
							<td className='text-center' colSpan='2'>
								{album.title}
							</td>
							<td className='text-center'>
								<Link href={`/photos/${album.id}`}>
									<Button size='sm' variant='dark'>
										Album
									</Button>
								</Link>
							</td>
						</tr>
					)
				})}
			</tbody>
		</Table>
	</Jumbotron>
)

export async function getStaticProps() {
	const res = await fetch("https://jsonplaceholder.typicode.com/albums")
	const data = await res.json()
	return { props: { albums: data } }
}
