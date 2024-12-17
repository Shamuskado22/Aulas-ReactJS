// import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent';
import OtherComponent from './components/OtherComponent';
import Images from './components/Images';
import Hooks from './components/Hooks';
import List from './components/List';
import CondRender from './components/CondRender';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {
  return (
    <div className="App">
      <h1>
        Hello World
      </h1>
      <FirstComponent />
      <OtherComponent />
      <Images />
      <Hooks />
      <List />
      <CondRender x={6} y={10} />
      <Fragment />
      <Container>
        <h1>Este é filho do container</h1>
      </Container>
    </div>
  );
}

export default App;
