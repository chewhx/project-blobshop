export async function getBlobs() {
  const res = await fetch(`http://localhost:3000/api/blobs`);
  const blobs = await res.json();
  return blobs;
}

export async function getRandomBlobPath() {
  const res = await fetch(`http://localhost:3000/api/randomblob`);
  const blobPath = await res.text();
  return blobPath;
}
