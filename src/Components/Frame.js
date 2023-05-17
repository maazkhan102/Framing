import React from 'react'
import '../CSS/Frame.css'
import { useState } from "react";
import Popup from '../Popup';
import EasyCrop from '../EasyCrop';
import { GrBasket } from 'react-icons/gr';
import { FiRotateCcw } from 'react-icons/fi';
import { MdOutlineResetTv } from 'react-icons/md';
import { BiCrop } from 'react-icons/bi';

const Frame = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [style, setStyle] = useState("frame1");
    const [stylee, setStylee] = useState("frame2");
    const [isOpen, setIsOpen] = useState(false);
    // const [image, setImage] = useState(null);

    // const handleImageUpload = async (e) => {
    //   setImage(URL.createObjectURL(e.target.files[0]));
    // };
 
    // This is popup
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }
    

    // This is Frame1
     const changeStyle1 = () => {
        console.log("you just clicked");
      
        setStyle("framee1");
      };
      const resetState1 = () => {
        setStyle("frame1");
      };

      // This is Frame2
      const changeStyle2 = () => {
        console.log("you just clicked");
        setStylee("framee2");
      };
      const resetState2 = () => {
        setStylee("frame2");
      };
    
 
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };
 
    const onSubmit = (e) => {
        e.preventDefault() 
        alert(URL.createObjectURL(selectedImage))
 
    }
    
    
  return (
    <>
    <div className="container" >
    <form onSubmit={ onSubmit } className="form-inline">
                <div className="form-group">
                <input className="form-control" type="file"  onChange={imageChange}  accept="image/*"/>
                </div> <br/>
                {/* <button type="submit" className="btn btn-success" >Upload File</button> */}
            </form>

        <div className="row">
<div className='mainframe1'>
        {selectedImage && (
            <div className={style} style={styles.preview}>
                 <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
          
          </div>
          
)}
<button className="button" onClick={changeStyle1}>
              ROTATE  <FiRotateCcw/>
            </button>
            <button className="button" onClick={resetState1}>
              RESET <MdOutlineResetTv/>
            </button>
           

             {/* This is the Popup section */}
        <input className='cropbutton'
      type="button"
      value="CROP"
      onClick={togglePopup}
    /> <BiCrop/>
    
    <br></br>
     <button className='MyAddtoCart'>
              Add to cart &nbsp;  <GrBasket/>
            </button>
</div>





 <div className='mainframe1'>
    {selectedImage && (
            <div className={stylee} style={styles.preview}>
                 <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
          </div>
)}
<button className="button" onClick={changeStyle2}>
          ROTATE  <FiRotateCcw/>
            </button>
            <button className="button" onClick={resetState2}>
            RESET <MdOutlineResetTv/>
            </button> 

             {/* This is the Popup section */}
       <input className='cropbutton'
      type="button"
      value="CROP"
      onClick={togglePopup}
    /> <BiCrop/>
        <br></br>
     <button className='MyAddtoCart'>
              Add to cart &nbsp;  <GrBasket/>
            </button>
    </div> 



    {isOpen && <Popup
      content={<>
          <header className="App-header">
        <EasyCrop 
         image={URL.createObjectURL(selectedImage)}
         style={styles.image}
         alt="Thumb"   />
      </header>
      </>}
      handleClose={togglePopup}
    />}
  
        </div>
      </div>
    
    
    
    </>
  )
}

export default Frame
const styles = {
    preview: {
      marginLeft: 5,
      marginTop: 50,
      display: "flex",
      flexDirection: "column",
    },
    image: { maxWidth: "100%", maxHeight: 320 },
    delete: {
      cursor: "pointer",
      padding: 15,
      background: "red",
      color: "white",
      border: "none",
    },
};