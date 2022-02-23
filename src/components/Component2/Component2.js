import React from 'react'
import ChildComponent1 from '../Component1/ChildComponent1/ChildComponent1'
import './Component2.scss'

const Component2 = function(props) {
  return (
    <div className="Component2">
      <h1>Heading {props.heading}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cumque voluptatum obcaecati aliquid nam veritatis perspiciatis aperiam eligendi esse harum excepturi ipsum eveniet in a asperiores pariatur itaque ea natus.</p>
      <ChildComponent1 />
    </div>
  )
}

export default Component2