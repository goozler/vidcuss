import React from "react"
import ListVideos from "./sections/ListVideos"
import NewVideoForm from "./sections/NewVideoForm"

const App: React.FC = () => {
  return (
    <>
      <NewVideoForm />
      <ListVideos />
    </>
  )
}

export default App
