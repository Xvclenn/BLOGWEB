import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import "./NewCategory.css";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { CreateCategory } from "./CreateCategory";

export function NewCategory() {
    const [categories, setCategories] = useState([]);

    function handleSave(text) {
        const newCategory = [
            {
                categoryName: text,
                categoryId: uuidv4(),
            },
            ...categories,
        ];
        setCategories(newCategory);
    }

    function handleDelete(index) {
        if (window.confirm("Устах уу?")) {
            const newCategory = [...categories];
            newCategory.splice(index, 1);
            setCategories(newCategory);
        }
    }

    function handleUpdate(index, text) {
        const newCategory = [...categories];
        newCategory[index].text = text;
        setCategories(newCategory);
    }

    return (
        <>
            <h1 className="m-5">Ангилал Нэмэх Талбар</h1>
            <div className="container">
                <CreateCategory onSave={handleSave} />
            </div>

            {categories.map((categoryItem, index) => {
                return (
                    <TodoListItem
                        key={categoryItem.id}
                        categoryItem={categoryItem}
                        onUpdate={(text) => handleUpdate(index, text)}
                        onDelete={() => handleDelete(index)}
                    />
                );
            })}
        </>
    );
}

// function NormalItem() {
//     return (
//         <div>
//             <Card body id="categoryItem">
//                 <Button variant="warning">Edit</Button>{" "}
//                 <Button variant="danger">Delete</Button>
//             </Card>
//         </div>
//     );
// }

function TodoListItem({ categoryItem, onUpdate, onDelete }) {
    const [editing, setEditing] = useState(false);

    function handleSave(text) {
        onUpdate(text);
        setEditing(false);
    }

    if (editing) {
        return (
            <EditingItem
                defaultValue={categoryItem.categoryName}
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

function EditingItem({ onSave, onCancel, onDelete, defaultValue }) {
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
            <span className="ms-3">{categoryItem.categoryName}</span>
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
