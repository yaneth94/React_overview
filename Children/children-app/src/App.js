import React from 'react'
import { Counter, Title, Button } from './components/Counter'

const App = () => {
  return (
    <div>
      <Counter>
        <Button type='increment'/>
        <Title />
        <Button type='decrement'/>
        <Title>
          {(clicks) => (
            <h1>{clicks} Clicks</h1>
          )}
        </Title>
      </Counter>
    </div>
  )
}


export default App

