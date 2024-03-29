import React from 'react'
import ReactQuill, {Quill} from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import ImageResize from 'quill-image-resize-module-react'

Quill.register('modules/imageResize', ImageResize)

function RichTextEditor({value, onChange, read}) {
    return (
        <ReactQuill
            value={value}
            onChange={onChange}
            theme={'snow'}
            readOnly={read}
            modules={
                {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{'header': 1}, {'header': 2}],
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        [{'script': 'sub'}, {'script': 'super'}],
                        [{'indent': '-1'}, {'indent': '+1'}],
                        [{'direction': 'rtl'}],
                        [{'size': ['small', false, 'large', 'huge']}],
                        [{'header': [1, 2, 3, 4, 5, 6, false]}],
                        [{'color': []}, {'background': []}],
                        [{'font': []}],
                        [{'align': []}],
                        ['link', 'image', 'video'],
                        ['clean']
                    ],
                    imageResize: {
                        parchment: Quill.import('parchment'),
                        modules: ['Resize', 'DisplaySize']
                    }
                }
            }
        />
    )
}

export default RichTextEditor