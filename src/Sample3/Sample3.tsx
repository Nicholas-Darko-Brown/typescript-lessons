import React, { useState } from 'react'

const Sample3 = () => {
    const [message, setMessage] = useState<string>("")

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setMessage(e.currentTarget.value)
    }
    

  return (
    <div>
        <h3>Sample3</h3>

        <input type="text" onChange={handleChange} value={message} />
    </div>
  )
}

export default Sample3