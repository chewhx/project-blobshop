import Head from "next/head";
import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

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
          crossorigin="anonymous"
        /> */}
        <meta name="og:title" content={siteTitle} />
        <title>{`${siteTitle} | ${siteSubtitle}`}</title>
      </Head>
      <Navbar bg="light" expand="lg" className="mb-5">
        <Container>
          <Navbar.Brand href="/">
            <h1>{siteTitle}</h1>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item className="my-3 my-lg-0">
                <Link href="/">Home</Link>
              </Nav.Item>
              <Nav.Item className="my-3 my-lg-0">
                <Link href="/gallery">Gallery</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main style={{ minHeight: "70vh" }}>
        <Container>{children}</Container>
      </main>
    </>
  );
}
