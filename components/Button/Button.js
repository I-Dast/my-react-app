import './Button.css';

const Button = (props) => {
    console.log(props);
    return (<button className="CardButton card-button">{props.children}</button>);
    }
  export default Button;