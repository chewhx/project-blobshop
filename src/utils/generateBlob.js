import blobs from "blobs";

const newBlob = (color) => {
  const blob = blobs.editable({
    size: 450,
    complexity: Math.random(),
    contrast: 0.5,
    color: `#${color}`,
    guides: false,
    seed: Math.floor(Math.random() * 99),
  });
  const viewBox = blob.attributes.viewBox;
  const transform = blob.children[0].attributes.transform;
  const path = blob.children[0].children[0].attributes.d;
  return { viewBox, transform, path };
};
export default newBlob;
