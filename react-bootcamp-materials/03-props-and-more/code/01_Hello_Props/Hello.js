class Hello extends React.Component {
  render() {
    return (
      <div>
         <p>Hi {this.props.to} from {this.props.from}</p>
      </div>
    )
  }
}