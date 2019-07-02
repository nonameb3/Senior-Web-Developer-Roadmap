import { Component } from 'react';
import ReactDOM from 'react-dom';
import './Model.css';

const ModelRoot = document.getElementById('model-root');

export default class Model extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement('div');
  }

  componentDidMount() {
    ModelRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    ModelRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.el);
  }
}
