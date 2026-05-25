function App() {
  const greetings = [
    {id:1, name: 'mark', frase: 'good morning' },
    {id:2,  name: 'eva', frase: 'good evening' },
    {id:3,  name: 'roman', frase: 'good day' }
  ];

  return (
    <div>
      <h1>Wish machine</h1>
      {  greetings.map((greeting) => {
    return (
      <div key = {greeting.id}>
        <p> 
          hello {greeting.name}, {greeting.frase}.
        </p>
      </div>
    );
  })}
    </div>
  );
}

export default App;