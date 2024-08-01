import CoreImage1 from "./assets/components.png";
import CoreImage3 from "./assets/config.png";
import CoreImage2 from "./assets/jsx-ui.png";
import CoreImage4 from "./assets/state-mgmt.png";


const titles = ["Components", "JSX", "Props", "State"];
const images = [CoreImage1, CoreImage2, CoreImage3, CoreImage4];
const texts = ["The core UI building block - compose the user interface by combining multiple components.", "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.", "Make components configurable (and therefore reusable) by passing input data to them.", "React-managed data which, when changed, causes the component to re-render & the UI to update"];
export const ITEMS = [
  { title: titles[0], image: images[0], text: texts[0] },
  { title: titles[1], image: images[1], text: texts[1] },
  { title: titles[2], image: images[2], text: texts[2] },
  { title: titles[3], image: images[3], text: texts[3] },
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};
