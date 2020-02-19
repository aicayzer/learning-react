class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Sam" from="John" />
        <Hello to="Will" from="Henry" />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))