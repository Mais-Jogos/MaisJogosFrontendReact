import "./style.css";
import React from "react";


export default props => {

    return (
        <div>
            <label htmlFor={props.name + "upload"} className="labelUploadJogo">{props.name}</label>
            <div>
                <input type="file" accept=".zip" id={props.name + "upload"} className="cadastroJogo__content__uploadContent__fileUpload--changeText" 
                onChange={e => {props.setState(e.target.files);  props.dispatchError({ type: 'upload', upload: false })}}></input>
            </div>
        </div>
    )
}

