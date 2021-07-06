import React, { useState } from "react";
import { IconButton } from "gestalt";
import useIndexedDb from "../useIndexedDb";

const IconPinLocal = ({ values }) => {
  const { addItem, removeItem } = useIndexedDb();
  const [pinned, setPinned] = useState(false);
  const [itemPinned, setItemPinned] = useState("");
  return (
    <IconButton
      accessibilityLabel="pin-local-svg"
      icon={pinned ? "check" : "pin"}
      bgColor={pinned ? "red" : "transparent"}
      size="lg"
      onClick={() => {
        setPinned((prev) => {
          if (prev) {
            removeItem(itemPinned);
            return false;
          } else {
            const key = String(Date.now());
            setItemPinned(key);
            addItem(key, values);
            return true;
          }
        });
      }}
    />
  );
};

export default IconPinLocal;
