import logo from './logo.svg';
import './App.css';

function App(props) {
  const list = props.menuItems;

  const listItem = list.map((item,index)=>{
        return <li key={index}>{item}</li>
  });

  return (
    <ul>{listItem}</ul>
  )
}

export default App;
