import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ImgPlaceholder from './placeholder.png'
import { HiOutlineCamera } from 'react-icons/hi'



export default function ImageUpload() {
  const [mainImg, setMainImg] = useState(ImgPlaceholder)
  const [Image1, setImage1] = useState([])
  const [Image2, setImage2] = useState([])
  const [Image3, setImage3] = useState([])
  const [Image4, setImage4] = useState([])
  const [Image5, setImage5] = useState([])

 return (
    <div className='entry'>
      <div className='image-upload'>
        <div className='mainImage'>
          <img src={mainImg} alt='placeholder' />
        </div>
        <div className='image-selection'>
          
        </div>
      </div>
    </div>
  )
}
