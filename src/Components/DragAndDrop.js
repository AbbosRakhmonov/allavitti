import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'

function DragAndDrop({files, setFiles, img}) {
    const [image, setImage] = useState('')
    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles)
    }

    const {getRootProps, getInputProps, isDragActive, acceptedFiles} = useDropzone({
        onDrop,
        multiple: false,
        accept: {
            'image/*': ['.jpg', '.png', '.jpeg']
        },
        maxFiles: 1
    })

    useEffect(() => {
        if (acceptedFiles.length > 0) {
            const reader = new FileReader()
            reader.readAsDataURL(acceptedFiles[0])
            reader.onload = () => {
                setImage(reader.result)
            }
        }
    }, [acceptedFiles])

    useEffect(() => {
        if (img) setImage(img)
    }, [img])

    return (
        <div
            {...getRootProps()}
            className={`drag-and-drop h-100 mh-100 position-relative overflow-hidden d-flex gap-2 flex-column justify-content-center align-items-center p-4`}
            style={{
                border: '2px dashed #ccc',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: isDragActive ? '#eee' : '#fff',
                transition: 'all 0.3s ease'
            }}
        >
            <input {...getInputProps()} accept={
                'image/*'
            }/>
            {
                image ? <>
                        <img crossOrigin="anonymous" src={image} alt="product-allavitti" className={'w-100 object-cover'}/>
                        {acceptedFiles.length > 0 && <span className="text-mute text-center" style={{
                            fontSize: '10px'
                        }}>{acceptedFiles[0].name}</span>}
                    </> :
                    <p className="text-center">Rasmni yuklash</p>
            }
            <div className="overlay-drag position-absolute top-0 start-0 w-100 h-100"
                 style={{
                     zIndex: '25',
                     backgroundColor: 'rgba(11,87,150,0.5)',
                     transition: 'all 0.3s ease'
                 }}>
                <div className="d-flex justify-content-center align-items-center h-100">
                    <i className="fas fa-camera fa-2x text-white"/>
                </div>
            </div>
        </div>
    )
}

export default DragAndDrop