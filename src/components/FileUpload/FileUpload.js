import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  return (
    <div className="file-upload">
      <input type="file" onChange={handleFileChange} style={{ display: 'none' }} id="file-upload" />
      <label htmlFor="file-upload" className="file-upload-label">
        {file ? (
          <h6>ไฟล์ที่เลือก: {file.name}</h6>
        ) : (
          <h6>เลือกไฟล์</h6>
        )}
      </label>
    </div>
  );
}

export default FileUpload;
