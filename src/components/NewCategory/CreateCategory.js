import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function CreateCategory({ onSave }) {
    const [text, setText] = useState("");

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleSave() {
        if (text === "") {
        } else {
            onSave(text);

            setText("");
        }
    }

    function handleKeyUp(e) {
        if (e.code === "Enter") {
            handleSave();
        }
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    value={text}
                    onChange={handleTextChange}
                    onKeyUp={handleKeyUp}
                />
                <Button
                    variant="outline-success"
                    id="button-addon2"
                    onSave={handleSave}
                    onClick={handleSave}
                >
                    New
                </Button>
            </InputGroup>
        </>
    );
}
