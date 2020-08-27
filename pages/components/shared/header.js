import {Navbar, Nav, NavDropdown, Form, FormControl, Button, img,Carousel} from 'react-bootstrap';
import Link from 'next/link'
import { Download } from 'react-bootstrap-icons';
const AppLink = ({children, className, href}) =>
<Link href={href}>
  <a className= {className}>{children}</a>
</Link>
export default function Header() { 
    return (
        <>
<Navbar bg="light"  expand="lg">
  <Navbar.Brand href="#home">
  <img
        src="/macgregor logo.png"
        width="250"
        height="60"
        className="d-inline-block align-top"
        alt="MacGregor Marine logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className= "basic-navbar-nav" />
  <Navbar.Collapse className="basic-navbar-nav">
    <Nav className="mr-auto">
      <AppLink href="/"><a className="nav-link mr-3">Accueil</a></AppLink>
      <AppLink href="/services"><a className="nav-link mr-3">Services et marchés</a></AppLink>
      <AppLink href="/particuliers"> <a className="nav-link mr-3">Partenaires</a></AppLink>
      <AppLink href="/contact"> <a className="nav-link mr-3">Contact</a></AppLink>
     
    </Nav>
    <Form inline>
    <Button className= "mr-5" variant="outline-success ">Mail: info@macgregor-ms.com</Button>
      <Button variant="outline-success" href="brochure_fr.pdf" download><Download color="green" size={20} /> Brochure</Button>
    </Form>
  </Navbar.Collapse>
</Navbar> 
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="remorqueur.jpg"
      width="100"
      height="400"
      alt="Remorqueur de type Damen Stan"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="barge.jpg"
      width="200"
      height="400"
      alt="Barge"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<style jsx>{
        `.nav-link{
          color: #eaeaea;
          
        }
.basic-navbar-nav{
  color: #eaeaea;
}
# basic-navbar-nav{
  color: #eaeaea;
}
        `
      }

      </style>


</>
 )
}
