import { Figure } from 'react-bootstrap'

export default function Logo(props) {
    return (
        <Figure>
            <Figure.Image src={props.src} className='icon' />
            <Figure.Caption>{props.caption}</Figure.Caption>
        </Figure>
    );
}