import logo from './logo.svg';
import './App.css';
import Blog from './Component/Blog/Blog';
const obj={
  color:"brown",
  padding:"20px",
  fontWeight:"bold"

}
function App() {
  return (
    <div className="App">
      <div className='blog'>
        <article>
          <h2 style={obj}>Hello World</h2>
          <p style={{color:"green"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, molestiae?</p>
        </article>
      </div>

      <div className='container'>
<Blog head="Head ONE"author="Tasnia"></Blog>
<Blog head="Head TWO"author="Sharin"></Blog>
<Blog head="Head Three"author="Samia"></Blog>
      </div>
    </div>
  );
}

export default App;
