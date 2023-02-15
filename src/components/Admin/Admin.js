import Card from "react-bootstrap/Card";
import "./Admin.css";

export function Admin() {
    return (
        <>
            <br />
            <Card
                className="hiCard"
                border="dark"
                style={{ maxWidth: "1000px" }}
            >
                <Card.Header>😇</Card.Header>
                <Card.Body>
                    <h1>Have A Good Day: "NAME"</h1>
                </Card.Body>
            </Card>
            <br />
        </>
    );
}
