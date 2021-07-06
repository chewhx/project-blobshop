export async function getBlobs() {
  const res = await fetch(`http://localhost:3000/api/blobs`);
  const blobs = await res.json();
  return blobs;
}
