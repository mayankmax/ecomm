import './Button.scss';

export default function Button(props) {
    var name = props.name;
    var type = props.type
  return (
    <button type={type} className="btn" id="btn">{name}</button>
  )
}
