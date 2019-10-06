import React from "react"
import { useListVideosQuery } from "~/graphql"

const ListVideos = () => {
  const { data, loading } = useListVideosQuery()

  if (loading) return <h3>…</h3>

  const videos = (data && data.videos) || []

  return (
    <>
      {videos.map(({ id, title, url }) => (
        <div key={id}>
          <h2>{title}</h2>
          <h3>
            <a href={url}>{url}</a>
          </h3>
        </div>
      ))}
    </>
  )
}

export default ListVideos
