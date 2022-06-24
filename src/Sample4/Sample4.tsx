import React, { FC } from 'react'

type Props = {
    title: string
}

const Sample4: FC<Props> = ({ title }) => {
  return (
    <div>
        <h3>Sample4</h3>

        <p> {title} </p>
    </div>
  )
}

export default Sample4