import './App.css';
import { MyComponent, AnotherComponent } from './components/components'
import Mycomo from './components/mycom';
import MainContent from './components/myco';
import { Header,Footer } from './components/myco';

function App() {
  return (
    <div className="App">
      <Header/>
      <MyComponent/>
      <MainContent/>
      <AnotherComponent/>
      <Mycomo/>
      <Footer/> 
    </div>
  );
}

export default App