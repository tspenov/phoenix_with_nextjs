import Layout from '../components/Layout.js'

export default (props) => (
  <ul>
    {props.items.map((item) => (
      <li>
        {item}
      </li>
    ))}
  </ul>
)
