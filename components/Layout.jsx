import Head from "next/head";
import Link from "next/link";
import { Navbar, Nav } from "react-bootstrap";
import NavBar from "./Nav";
import { Container } from "gestalt";
export const siteTitle = "Blobshop";
export const siteSubtitle = "Your very own blobs";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
        ></link>
        <meta name="og:title" content={siteTitle} />
        <title>{`${siteTitle} | ${siteSubtitle}`}</title>
      </Head>
      <NavBar />
      <main style={{ minHeight: "70vh" }}>
        <Container>{children}</Container>
      </main>
    </>
  );
}
