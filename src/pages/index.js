import React from "react"
//import Layout from "../components/layout"
import Layout from "../layouts/index"
import "../styles/global.css"

export default function Home() {
  return (
    <section>
      <Layout>
        <h1>
          Hi! I'm building a fake Gatsby site as part of a tutorial!
        </h1>
        <h3>
          This is a subheader, h3 to be exact.
        </h3>
        <p>
          What do I like to do? Lots of course but definitely enjoy building
          websites.
        </p>
      </Layout>
    </section>
  )
}
