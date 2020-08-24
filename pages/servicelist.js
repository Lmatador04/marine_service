import { Row, Col, Card, Container, Image } from 'react-bootstrap';
//import {faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function Servicelist() {
    return(
        <div>
<Container>        
<Row className="mt-5">
<Col md={6}>
    <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div className="col p-4 d-flex flex-column position-static">
    <h2 className="mb-2">MacGregor Marine Services</h2>
    <ul>
        <li>
       <strong> Transport fluviomaritime dans le golfe de Guinée</strong> </li>
 
 <li><strong>Mise à disposition d’attelage : Remorqueur + barge</strong> </li>
  
 <li><strong>Remorquage et assistance</strong></li> 
  
 <li><strong>Transbordement</strong>  </li>
    </ul>
    
      </div>
      </div>
</Col>


<Col md={6}>
<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="barq.jpg" />
  </Card>
</Col>


      </Row>
  <Row>
  <Col xs={12} md={12}>
  <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
         <div className="col p-4 d-flex flex-column position-static">

        <Image src="location.jpg" className="text-center" roundedCircle  style={{ width: '18rem' }}/>
        <h4 className="text-center"> Nous intervenons sur le golfe de Guinée notamment au:</h4>
    <ul >
        <li>
       <strong>Nigéria</strong> </li>
 
 <li><strong>Cameroun</strong> </li>
  
 <li><strong>Guinée équatoriale</strong></li> 
  
 <li><strong>Gabon</strong>  </li>
 <li><strong>Congo</strong>  </li>
 <li><strong>Angola</strong>  </li>
 <li><strong>Sao Tomé et principe</strong>  </li>
    </ul>
    
      </div>
      </div>
      </Col>
  </Row>

   

      </Container>
      <style jsx>{
        `.mb-2{
          color: #002e5d;
          
        }
        `
      }

      </style>
        </div>
    )
}