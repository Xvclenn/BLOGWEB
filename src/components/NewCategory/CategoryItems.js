import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import "./NewCategory.css";
import { useState } from "react";

export function CategoryItem({ categoryItem, onUpdate, onDelete }) {
    const [editing, setEditing] = useState(false);

    function handleSave(text) {
        onUpdate(text);
        setEditing(false);
    }

    if (editing) {
        return (
            <EditingItem
                defaultValue={categoryItem.name}
                onCancel={() => setEditing(false)}
                onSave={handleSave}
                onDelete={onDelete}
            />
        );
    }

    return (
        <NormalItem
            categoryItem={categoryItem}
            onEdit={() => setEditing(true)}
            onDelete={onDelete}
        />
    );
}

export function EditingItem({ onSave, onCancel, onDelete, defaultValue }) {
    const [text, setText] = useState(defaultValue);
    console.log(text);
    return (
        <Card body id="categoryItem">
            <Form.Control
                className="mx-3"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <div className="d-flex categoryItemBtn">
                <Button className="btn-success" onClick={() => onSave(text)}>
                    Хадгалах
                </Button>
                <Button className="btn-dark" onClick={() => onCancel()}>
                    Болих
                </Button>
                <Button className="btn-danger  " onClick={onDelete}>
                    Устгах
                </Button>
            </div>
        </Card>
    );
}

function NormalItem({ categoryItem, onEdit, onDelete }) {
    return (
        <Card body id="categoryItem">
            <span className="ms-3">{categoryItem.name}</span>
            <div className="d-flex categoryItemBtn">
                <Button variant="warning" onClick={onEdit}>
                    Засах
                </Button>
                <Button variant="danger" onClick={onDelete}>
                    Устгах
                </Button>
            </div>
        </Card>
    );
}
