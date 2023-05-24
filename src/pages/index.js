/* react/jsx-pascal-case */

import React from "react"

import {
  Intro,
  LoveToDo,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout, SeoPage } from "../components/common"
const IndexPage = () => (
  <Layout>
    <SeoPage title="Noman Gazi" description="Frontend Developer"/>
    <Intro />
    <About />
    <Skill />
    <LoveToDo />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
