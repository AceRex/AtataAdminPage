import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import ImgPlaceholder from './placeholder.png'
import {HiCamera} from 'react-icons/hi'


const thumbsContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // marginTop: 16
  };
  
  const thumb = {
    display: 'inline-flex',
    borderRadius: 2,
    border: '1px solid #eaeaea',
    // marginBottom: 8,
    // marginRight: 8,
    width: 100,
    height: 100,
    // padding: 4,
    boxSizing: 'border-box'
  };
  
  const thumbInner = {
    display: 'flex',
    minWidth: 0,
    overflow: 'hidden'
  };
  
  const img = {
    display: 'block',
    width: 'auto',
    height: '100%'
  };

  function Previews(props) {
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
      accept: 'image/*',
      onDrop: acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
    });
    
    const thumbs = files.map(file => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img
            src={file.preview}
            style={img}
            id={props.id}
            alt='displayImage'
          />
        </div>
      </div>
    ));
  
    useEffect(() => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
  
    return (
    <>
        <div {...getRootProps({})}>
          <input {...getInputProps()} />
          <aside style={thumbsContainer}>
          {thumbs}
        </aside>
        <p><HiCamera/></p>
        </div>
        
        </>
    );
  }
export default function ImageUpload() {
    const [mainImg, setMainImg] = useState(ImgPlaceholder)
    const [Image1, setImage1] = useState(ImgPlaceholder)
    const [Image2, setImage2] = useState(ImgPlaceholder)
    const [Image3, setImage3] = useState(ImgPlaceholder)
    const [Image4, setImage4] = useState(ImgPlaceholder)
    const [Image5, setImage5] = useState(ImgPlaceholder)

    const HandleMainPreview = (e) => {
        var activeImg = e.target.src
        var activeImgId = e.target.id
        setMainImg(activeImgId)
        // console.log(activeImg)
        // console.log(activeImgId)

    }

    return (
        <div className='entry'>
        <div className='image-upload'>
            <div className='mainImage'>
                <img src={mainImg} alt='placeholder' />
            </div>
            <div className='image-selection'>
                <Previews id={Image1} onClick={HandleMainPreview}/>
                <img src={Image1} alt='placeholder' id={Image1} style={thumbsContainer}/>
                {/* <img src={Image1} alt='placeholder' id={Image1} onClick={HandleClicked}  />
                <img src={Image2} alt='placeholder' id={Image2} onClick={HandleClicked} />
                <img src={Image3} alt='placeholder' id={Image3} onClick={HandleClicked} />
                <img src={Image4} alt='placeholder' id={Image4} onClick={HandleClicked} />
                <img src={Image5} alt='placeholder' id={Image5} onClick={HandleClicked} /> */}
            </div>
        </div>
    </div>
    )
}
