import axios from "axios";
import { useEffect, useState } from "react";

export function useCategories() {
    const [list, setList] = useState([]);

    function loadCategories() {
        axios.get(`http://localhost:8000/categories`).then((res) => {
            const { data, status } = res;

            if (status === 200) {
                setList(data);
            } else {
                alert(`Aldaa garlaa: ${status}`);
            }
        });
    }

    useEffect(() => {
        loadCategories();
    }, []);

    console.log(list);

    return list;
}
