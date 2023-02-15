import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

export function NavBarr() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand to="/admin" as={Link}>
                    Admin
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to="/admin/createNews" as={Link}>
                            Мэдээ Бэлтгэх
                        </Nav.Link>
                        <Nav.Link to="/admin/setCategory" as={Link}>
                            Ангилал Нэмэх
                        </Nav.Link>
                        <Nav.Link to="/admin/newsList" as={Link}>
                            Мэдээний Жагсаалт
                        </Nav.Link>
                        <Nav.Link to="">Client-аар Нэвтрэх</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
