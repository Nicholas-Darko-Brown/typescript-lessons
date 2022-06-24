import React, { useState } from 'react'
interface State {
    username: string,
    phone?: number
}

const Sample5 = () => {
  const [state, setState] = useState<State | null>(null)

  return (
    <div>
        <h3>Sample5</h3>
    </div>
  )
}

export default Sample5