import React, { useState } from "react";
import { IconButton, Dropdown, Flex } from "gestalt";
import useDownloadSvg from "../../hooks/useDownloadBlob";
import copy from "copy-to-clipboard";

const ShareOptions = ({ svg, blob }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(null);
  const anchorRef = React.useRef(null);
  const onSelect = ({ item }) =>
    setSelected(item.value === (selected || {}).value ? null : item);

  const { downloadSvg, downloadPng } = useDownloadSvg({
    svgRef: svg,
    fileName: blob.name,
  });

  return (
    <Flex justifyContent="center">
      <IconButton
        ref={anchorRef}
        size="lg"
        accessibilityControls="truncation-dropdown-example"
        accessibilityExpanded={show}
        accessibilityHaspopup
        accessibilityLabel="IconButton"
        icon="download"
        onClick={() => setShow((prev) => !prev)}
        selected={show}
      />

      {show && (
        <Dropdown
          anchor={anchorRef.current}
          id="share-option"
          onDismiss={() => setShow(false)}
        >
          {/* SVg code, download SVG, Share to pinterest, Add to gallery, add to local */}
          <Dropdown.Item
            option={{
              value: "Download SVG",
              label: "Download SVG",
            }}
            selected={selected}
            onSelect={() => downloadSvg()}
          />
          <Dropdown.Item
            option={{
              value: "Copy SVG",
              label: "Copy SVG",
            }}
            selected={selected}
            onSelect={() => {
              copy(svg.current.innerHTML);
              setTimeout(() => setShow(false), 500);
            }}
          />
          <Dropdown.Item
            option={{
              value: "Copy Link",
              label: "Copy Link",
            }}
            selected={selected}
            onSelect={() => {
              const {
                seed,
                strokeColor,
                strokeWidth,
                fillColor,
                randomness,
                extraPoints,
              } = blob;
              const queryString = `?seed=${seed}&fill=${
                fillColor.split("#")[1]
              }&strokeWidth=${strokeWidth}&strokeColor=${
                strokeColor.split("#")[1]
              }&randomness=${randomness}&extraPoints=${extraPoints}&size=256`;
              const link = `http://localhost:3000/api/randomblob`;
              copy(link + queryString);
              setTimeout(() => setShow(false), 500);
            }}
          />
        </Dropdown>
      )}
    </Flex>
  );
};

export default ShareOptions;
