import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import Card from "react-bootstrap/Card"
import CardColumns from "react-bootstrap/CardColumns"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Tooltip from "react-bootstrap/Tooltip"

export default ({ photos }) => (
	<CardColumns>
		{photos.map((photo, index) => (
			<Card key={index}>
				<Card.Img variant='top' src={photo.url} alt={`Invalid Url for Image #${photo.id}`} />
				<Card.Body>
					<Card.Text>{photo.title}</Card.Text>
					<ButtonGroup>
						<OverlayTrigger placement='bottom' overlay={<Tooltip>Update the Card</Tooltip>}>
							<Button variant='outline-info'>+</Button>
						</OverlayTrigger>

						<OverlayTrigger placement='bottom' overlay={<Tooltip>Delete the Card</Tooltip>}>
							<Button variant='outline-danger'>-</Button>
						</OverlayTrigger>
					</ButtonGroup>
				</Card.Body>
			</Card>
		))}
	</CardColumns>
)

export async function getServerSideProps({ params }) {
	const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${params.id}`)
	const photos = await res.json()
	return { props: { photos } }
}
