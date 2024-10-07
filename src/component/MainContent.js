// src/component/MainContent.js

import React, { useRef, useEffect } from 'react';
import PdfToPngConverter from './PdfToPngConverter';
import MergePDF from './MergePDF';
import CompressPDF from './CompressPDF';
import EditImg from './EditImg';
import SecurePdf from './SecurePdf';
import ImageToPdf from './ImageToPdf';
import PdfToPpt from './PdfToPpt';
import RotatePDF from './RotatePDF';
import '../Css/MainContent.css';
import Convert from '../assest/images/Covnert.png';
import MergeImg from '../assest/images/mergepdf.png';
import PdfImg from '../assest/images/pdfimage.png';
import CompressImg from '../assest/images/Compress.png';
import EditImage from '../assest/images/editpdfimg.png';
import SecureImg from '../assest/images/SecurePdf.png';
import PptImg from '../assest/images/pptToPDF.png';
import RotateImg from '../assest/images/rotatePDf.png';

function MainContent({ selectedComponent, setSelectedComponent }) {
  const refMap = {
    pdfConversion: useRef(null),
    mergePdf: useRef(null),
    fileCompressor: useRef(null),
    editImage: useRef(null),
    securePdf: useRef(null),
    imageToPdf: useRef(null),
    pdfToPpt: useRef(null),
    rotatePdf: useRef(null),
  };

  useEffect(() => {
    if (selectedComponent && refMap[selectedComponent]) {
      refMap[selectedComponent].current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedComponent]);

  const components = {
    pdfConversion: <PdfToPngConverter onClose={() => setSelectedComponent(null)} />,
    mergePdf: <MergePDF onClose={() => setSelectedComponent(null)} />,
    fileCompressor: <CompressPDF onClose={() => setSelectedComponent(null)} />,
    editImage: <EditImg onClose={() => setSelectedComponent(null)} />,
    securePdf: <SecurePdf onClose={() => setSelectedComponent(null)} />,
    imageToPdf: <ImageToPdf onClose={() => setSelectedComponent(null)} />,
    pdfToPpt: <PdfToPpt onClose={() => setSelectedComponent(null)} />,
    rotatePdf: <RotatePDF onClose={() => setSelectedComponent(null)} />,
    
  };

  return (
    <section id="features" className="features">
      {selectedComponent ? (
        <div ref={refMap[selectedComponent]}>
          {components[selectedComponent]}
        </div>
      ) : (
        <>
          <div className="Conversion" onClick={() => setSelectedComponent('pdfConversion')} ref={refMap.pdfConversion}>
            <img src={Convert} alt="Convert" className="img1" />
            <h2>PDF Conversion</h2>
            <p>Convert your documents to and from PDF format effortlessly. Supported formats include Word, Excel, PowerPoint, and more.</p>
          </div>

          <div className="Merge" onClick={() => setSelectedComponent('mergePdf')} ref={refMap.mergePdf}>
            <img src={MergeImg} alt="Merge" className="img2" />
            <h2>Merge PDFs</h2>
            <p>Easily merge multiple PDF files into a single document or split a large PDF into smaller files.</p>
          </div>

          <div className="Compress" onClick={() => setSelectedComponent('fileCompressor')} ref={refMap.fileCompressor}>
            <img src={CompressImg} alt="Compress" className="img3" />
            <h2>Compress PDFs</h2>
            <p>Reduce the size of your PDF files while maintaining the quality, making them easier to share and store.</p>
          </div>

          <div className="EditImg" onClick={() => setSelectedComponent('editImage')} ref={refMap.editImage}>
            <img src={EditImage} alt="Edit" className="img4" />
            <h2>Edit Image</h2>
            <p>Edit your images with ease using our editing tools.</p>
          </div>

          <div className="SecurePdf" onClick={() => setSelectedComponent('securePdf')} ref={refMap.securePdf}>
            <img src={SecureImg} alt="Secure PDF" className="img5" />
            <h2>Secure PDF</h2>
            <p>Secure your PDF files with password protection and encryption.</p>
          </div>

          <div className="ImageToPdf" onClick={() => setSelectedComponent('imageToPdf')} ref={refMap.imageToPdf}>
            <img src={PdfImg} alt="Image to PDF" className="img6" />
            <h2>Image to PDF</h2>
            <p>Convert your images to PDF format.</p>
          </div>

          <div className="PdfToPpt" onClick={() => setSelectedComponent('pdfToPpt')} ref={refMap.pdfToPpt}>
            <img src={PptImg} alt="PDF to PPT" className="img7" />
            <h2>PDF to PPT</h2>
            <p>Convert your PDF files to PowerPoint format.</p>
          </div>

          <div className="RotatePdf" onClick={() => setSelectedComponent('rotatePdf')} ref={refMap.rotatePdf}>
            <img src={RotateImg} alt="Rotate PDF" className="img8" />
            <h2>Rotate PDF</h2>
            <p>Rotate your PDF files.</p>
          </div>
        </>
      )}
    </section>
  );
}

export default MainContent;
