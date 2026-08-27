
import './App.css'
import Demo from './demo'

function App() {

  // Single-line JSX element
  const title = 'Welcome to JavaScript XML..!!'

  // Multiline JSX element
  const paragraph = (
    <div>
      <p>
        JSX allows us to combine script with HTML
      </p>

      <ul>
        <li>JSX is essential for React</li>
        <li>Converted to JavaScript using Babel</li>
        <li>Supports expressions as well</li>
      </ul>
    </div>
  )

  return (
    <div>
      <h2>{title}</h2>

      {paragraph}

      <Demo></Demo>
    </div>
  )
}

export default App

