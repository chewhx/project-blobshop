import React from "react";

const useDownloadSvg = ({ svgRef, fileName }) => {
  function downloadBlobHandler(blob, fileName) {
    const objectUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(objectUrl), 5000);
  }

  const downloadSvg = React.useCallback(() => {
    const svg = svgRef.current.innerHTML;
    const blobItem = new Blob([svg], { type: "image/svg+xml" });
    downloadBlobHandler(blobItem, `${fileName}.svg`);
  }, []);

  return { downloadSvg };
};

export default useDownloadSvg;
