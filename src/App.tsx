import { useCallback, useState } from "react";
import "./App.css";
import "./scss/main.scss"

function Button({ onClick }: { onClick: () => void }) {
  return <button onClick={onClick}>Increment</button>;
}

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <div>{count}</div>
      <Button onClick={increment}/>
    </>
  );
}

export default App;
