import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import './index.css';

interface Props {
  onUrlsAdded: (urls: string[]) => void;
}

const Dropzone: React.FC<Props> = ({ onUrlsAdded }) => {
  const [selectedFileUrls, setSelectedFileUrls] = useState<string[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const urls = acceptedFiles.map((file) => URL.createObjectURL(file));
    setSelectedFileUrls((prevUrls) => [...prevUrls, ...urls]);
    console.log(urls)
    onUrlsAdded(urls);
  }, [onUrlsAdded]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {"image/*":[]},
    multiple: true,
  });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <button type="button">Selecionar Fotos</button>
    </div>
  );
};

export default Dropzone;