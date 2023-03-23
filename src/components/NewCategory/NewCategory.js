import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import "./NewCategory.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { v4 as uuidv4 } from "uuid";
import { CreateCategory } from "./CreateCategory";
import { CategoryItem, EditingItem } from "./CategoryItems";

export function NewCategory() {
    const [categories, setCategories] = useState([]);
    const [list, setList] = useState();

    useEffect(() => {
        axios.get("http://localhost:8000/categories").then(function (res) {
            const { data, status } = res;
            if (status === 200) {
                setList(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }, []);

    function handleSave(text) {
        const newCategory = [
            {
                name: text,
                _id: uuidv4(),
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
                    <React.Fragment key={index}>
                        <CategoryItem
                            categoryItem={categoryItem}
                            onUpdate={(text) => handleUpdate(index, text)}
                            onDelete={() => handleDelete(index)}
                        />
                        <br />
                    </React.Fragment>
                );
            })}
        </>
    );
}
