import React from 'react'

// Type alias for normal props
// The optional prop means that you can render the component without passing the prop, but when you do pass the prop, it must be of the declared type.
type Props = {
    name: string,
    email?: string
}

const Sample2 = ({ name, email }: Props) => {
  return (
    <div>
        <h3>Sample Page 2</h3>

        <p> {name} </p>
        <p> {email} </p>
    </div>
  )
}

export default Sample2