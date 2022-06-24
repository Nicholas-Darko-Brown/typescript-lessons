import React from 'react'

// Typing an object prop: When you have an array of objects prop, just add the array literal notation at the end of the object declaration
type DataProps = {
    data: {
        id: number,
        title: string,
        gender: string,
        isMarried: boolean
    }[]
}

const Sample1 = ({ data }: DataProps) => {
  return (
    <div>
        <h3>Sample Page 1</h3>
         
         {data.map(item => (
            <div key={item.id}> 
                <p>{item.title}</p>
                <p>{item.gender}</p>
                <p>{item.isMarried}</p>
            </div>
         ))}
    </div>
  )
}

export default Sample1