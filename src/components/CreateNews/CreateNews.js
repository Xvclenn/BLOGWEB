import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./CreateNews.css";

export function CreateNews() {
    return (
        <>
            <h1>Мэдээ Бэлтгэх Талбар</h1>
            <div id="inputs" className="container">
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </div>
            <div id="ck" className="container">
                <CKEditor
                    editor={ClassicEditor}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                    }}
                />
            </div>
        </>
    );
}
