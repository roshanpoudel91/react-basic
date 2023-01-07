import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar';

function App(props) {
  const list = props.menuItems;

  const listItem = list.map((item,index)=>{
        return <Menubar key={item.toString()} item={item}/>
  });

  //its not good idea to pass the key as index.If order of the item changes
  // keys of the item gets changed.

  return (
    <ul>{listItem}</ul>
  )
}

export default App;
