import { useState } from "react"

export type AppProps = {
  initialCount: number
}

export default function App({ initialCount }: AppProps) {
  const [count, setCount] = useState(initialCount)
  return (
    <main style={{ padding: 24 }}>
      <h1>Full-page Island</h1>
      <p>Нажато: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>+1</button>
    </main>
  )
}
