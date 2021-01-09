import logo from './logo.svg';
import './App.css';
//import Example from './Containers/ExampleJSX/Example';
//import Example3, { Example1, Example2, Wrapper } from './Containers/ExampleJSX';
import { useState } from 'react';
import Routing from './Containers/Routing';




function App() {
  const [value, setValue] = useState(true);
  return (
    <div className="App">
      
      <main>
        <Routing/>

        {/*<div>
          <p>Hola estoy usando react</p>
        </div>

        <Example value={value} setValue={setValue}/>
        <Example value={value} setValue={setValue}/>
        <Example value={value} setValue={setValue}/>

        <Example1 text="Hey you!!!" color="black" bgColor="pink "/>
        <Example2/>
        <Example3 />
         <Wrapper styles={{backgroundColor: 'black', color: 'white'}}>
            <Example1 text="Hey you!!!"/>
            <Example2/>
         </Wrapper>
         <Wrapper styles={{backgroundColor: 'lightblue', color: 'black'}}>
            <Example1 text="Hey you!!!"/>
            <Example2/>
        </Wrapper>*/}
      </main>
    </div>
  );
}

export default App;
