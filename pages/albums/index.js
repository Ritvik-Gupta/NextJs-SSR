import Link from "next/link"
import { useEffect, useState } from "react"
import Button from "react-bootstrap/Button"
import Jumbotron from "react-bootstrap/Jumbotron"
import Spinner from "react-bootstrap/Spinner"
import Table from "react-bootstrap/Table"

export default () => {
	const [albums, setAlbums] = useState([])

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/albums")
			.then(res => res.json())
			.then(data => {
				console.groupCollapsed("New Albums")
				console.log(data)
				console.groupEnd()
				setAlbums(data)
			})
	}, [])

	const mappedAlbum = albums.map(album => {
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
	})

	const emptyAlbum = (
		<tr>
			<td colSpan='4' className='text-center'>
				<Spinner variant='info' animation='grow' />
			</td>
		</tr>
	)

	return (
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
				<tbody>{mappedAlbum.length > 0 ? mappedAlbum : emptyAlbum}</tbody>
			</Table>
		</Jumbotron>
	)
}
