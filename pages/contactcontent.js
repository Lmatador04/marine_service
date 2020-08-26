import { Row, Col, Card, Container, Image } from 'react-bootstrap';
import styles from '../styles/Home.module.css'
export default function Contactcontent (){
return(
    <div>
        <Container>

        
<Row >
<Col><a className= {styles.error} href="brochure_fr.pdf" download>Télécharger</a></Col>
</Row>
</Container>

    </div>
)

}