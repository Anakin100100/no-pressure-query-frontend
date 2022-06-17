import type { NextPage } from 'next'
import {  Configuration, DefaultApi } from "../client"
import Register from "../components/register"

const Home: NextPage = (props) => {
  return (
    <Register />
  )
}


export const getStaticProps = async () => {
  const config = new Configuration()
  const api = new DefaultApi(config)


  const message = await api.readRootApiGet()
  console.log(JSON.parse(message))

  return {
    props: {
      message: JSON.parse(message).message
    }
  }
}


export default Home
