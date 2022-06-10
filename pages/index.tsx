import type { NextPage } from 'next'
import {  Configuration, DefaultApi } from "../client"

const Home: NextPage = (props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex">
        <p className="text-3xl font-semibold">{props["message"]}</p>
      </div>
    </div>
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
