import Greetings from "./Greetings";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} say hello`);
  };

  return (
    <div className="App">
      <Greetings name="AhnYeongMin" onClick={onClick}></Greetings>
    </div>
  );
}

export default App;
