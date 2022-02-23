import React from 'react'
import ChildComponent from './ChildComponent1/ChildComponent1'
import './Component1.css'

const Component1 = () => {
  return (
    <div className="Component1">
      <h1>Heading 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos animi soluta ad. Exercitationem repellendus, neque corrupti doloremque corporis numquam, praesentium sit itaque eos deleniti accusamus modi quibusdam mollitia dignissimos similique omnis aut, libero dolorem porro facere labore. Labore voluptatibus magnam in facere doloremque, quia sint soluta, voluptate explicabo incidunt quas.</p>
      <ChildComponent />
    </div>
  )
}

export default Component1