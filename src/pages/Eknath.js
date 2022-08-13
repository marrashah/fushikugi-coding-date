import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Eknath = () => (
  <Layout>
    <h1>hy,,,,, ak eknath</h1>
    <p>megumy kw super</p>
    <div><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TKnzMFo6znY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <Link to="/">'blik ke awal'</Link>
  </Layout>
)

export const Head = () => <Seo title="Eknath" />

export default Eknath
