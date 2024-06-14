import React from 'react'

export default function Post({ data, liker }) {
  return (
    <div>
        <div>
            <h2>{data.titre}</h2>
            <p>{data.description}</p>
        </div>
        <div>
            <button onClick={() => liker(data)}>Like</button>
            <button>Delete</button>
        </div>
    </div>
  )
}
