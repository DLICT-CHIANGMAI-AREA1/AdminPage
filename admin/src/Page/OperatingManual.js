import React from 'react';
import { Document, Page } from 'react-pdf';

import samplePDF from './sample.pdf';

export default function OperatingManual() {
  return (
    <Document file={samplePDF}>
      <Page pageNumber={1} />
    </Document>
  );
}

