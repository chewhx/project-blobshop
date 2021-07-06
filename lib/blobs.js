export async function getBlobs() {
  const res = await fetch(`https://project-blobshop.vercel.app/api/blobs`);
  const blobs = await res.json();
  return blobs;
}
