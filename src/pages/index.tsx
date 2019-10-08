import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Translator from "../components/Translator/Translator"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Translator />
  </Layout>
)

export default IndexPage
