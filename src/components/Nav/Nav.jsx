import { Navbar, Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";
import "./Nav.css";
import Logo from './icono.png';

export function Nav() {
    return (
     <div class="Nav">
   <Navbar>
        <Container>
            <Navbar.Brand href="#home"> <img src={Logo} className="logo"/> </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    App create by: <span>Facundo Loto</span>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
     </div>
    );
};