import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import "../cards.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);

  const fileTypes = ["image/png", "image/jpeg", "image/jpg"];

  useEffect(() => {
    if (!file) return;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const clearImageHandler = () => {
    setPreviewUrl(null);
    setFile(null);
    setIsValid(false);
    props.onChange("logoImg", "");
  };

  const pickedHandler = (event) => {
    console.log(event.target.files[0].type);
    let pickedFile, fileIsValid;
    if (
      event.target.files &&
      event.target.files.length === 1 &&
      fileTypes.indexOf(event.target.files[0].type) > -1
    ) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    if (fileIsValid) {
      setError(null);
      props.onChange("logoImg", pickedFile);
    } else {
      setError("Please upload a logo file (png, jpg or jpeg)");
      console.log("file is not valid");
    }
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <Form.File
          style={{ width: "60%", marginRight: "20px" }}
          type="file"
          onChange={pickedHandler}
          accept=".jpg,.png,.jpeg"
          id="custom-file"
          label="Opt: logo"
          lang="en"
          custom
          isInvalid={!!error}
          feedback={error}
        />
        <div>
          {previewUrl && isValid && (
            <div style={{ position: "relative" }}>
              <button
                className="form-logo-clearButton"
                onClick={clearImageHandler}
              >
                x
              </button>
              <img src={previewUrl} style={{ width: "6rem" }} alt="preview" />
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ImageUpload;
