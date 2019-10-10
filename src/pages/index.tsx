import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Translator from "../components/Translator/Translator"
import Jokes from "../components/Jokes/Jokes"
import logo from "../images/billhop.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={logo} alt="logo" style={{paddingTop: "20px"}}/>
    <Translator />
    <Jokes />
  </Layout>
)

export default IndexPage
