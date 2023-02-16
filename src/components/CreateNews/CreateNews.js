import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Form from 'react-bootstrap/Form';
import './CreateNews.css';

export function CreateNews() {
    return (
        <>
            <h1 className='m-5'>Мэдээ Бэлтгэх Талбар</h1>
            <div id='inputs' className='container'>
                <input
                    className='form-control'
                    placeholder='Мэдээний Гарчиг'
                ></input>
                <select className='form-select'>
                    <option>Ангилалгүй</option>
                    <option value='1'>One</option>
                    <option value='2'>Two</option>
                    <option value='3'>Three</option>
                </select>
                <input
                    className='form-control'
                    placeholder='Мэдээний Бэлтгэгч'
                ></input>
                <input className='form-control'></input>
            </div>
            <div id='ck' className='container'>
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
