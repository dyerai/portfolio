import { Figure } from 'react-bootstrap'

export default function Logo(props) {
    return (
        <Figure className='zoom'>
            <Figure.Image src={props.src} className='icon' />
            <Figure.Caption>{props.caption}</Figure.Caption>
        </Figure>
    );
}