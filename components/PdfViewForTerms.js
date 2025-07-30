import { useCallback, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
const resizeObserverOptions = {};

const maxWidth = 1920;
export default function PDFViewer() {
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState();
  const [containerRef, setContainerRef] = useState(null);
  const onResize = useCallback((entries) => {
    const [entry] = entries;

    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <div ref={setContainerRef}>
        <Document file={"./terms.pdf"} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
              width={
                containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
              }
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
