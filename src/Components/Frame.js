import React from 'react'
import '../CSS/Frame.css'
import { useState } from "react";
const Frame = () => {
    const [selectedImage, setSelectedImage] = useState();
    const [style, setStyle] = useState("frame1");
    const [stylee, setStylee] = useState("frame2");
    

     const changeStyle = () => {
        console.log("you just clicked");
      
        setStyle("framee1");
        setStylee("framee2");
      };
      const resetState = () => {
        setStyle("frame1");
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
        <div className="row">
            <form onSubmit={ onSubmit } className="form-inline">
                <div className="form-group">
                <label>Choose File to Upload: </label>
                <input type="file" className="form-control" onChange={imageChange} accept="image/*"/>
                </div> <br/>
                {/* <button type="submit" className="btn btn-success" >Upload File</button> */}
            </form>

        {selectedImage && (
            <div className={style} style={styles.preview}>
                 <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
          </div>
)}
    {selectedImage && (
            <div className={stylee} style={styles.preview}>
                 <img
              src={URL.createObjectURL(selectedImage)}
              style={styles.image}
              alt="Thumb"
            />
          </div>
)}
<button className="button" onClick={changeStyle}>
              Rotate Frame 
            </button>
            <button className="button" onClick={resetState}>
              Reset
            </button>
  
        </div>
      </div>
    
    
    
    </>
  )
}

export default Frame
const styles = {
    preview: {
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