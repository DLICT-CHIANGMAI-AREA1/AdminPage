import React ,{useState} from 'react';
import {Document,Page} from 'react-pdf/dist/esm/entry.webpack'

const PDFViewer = () => {

    const [numPage,setNumPages]= useState(null)
    const [pageNumber,setPageNumber] = useState(1)

    function onDocumentLoadSuccess({numPage}){
        setNumPages(numPage);
        setPageNumber(1)
    }

    return (
        <div>
            
        </div>
    );
}

export default PDFViewer;
