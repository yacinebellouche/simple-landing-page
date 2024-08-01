
import imageReact from './../assets/react-core-concepts.png';
const reactDes = ['Core','Fundamental','Crucial'];

function radnomMax(max){
  return Math.floor(Math.random() * (max + 1))
}
function Header() {
    let word = reactDes[radnomMax(2)];
  return (
    <header>
      <img src={imageReact} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {word} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
export default Header; 