import React from 'react';

class AlphabetCake extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cake: [],
    };
  }

  componentDidMount() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const cake = [];
    for (let i = 0; i < alphabet.length; i++) {
      cake.push(
        <div key={i} className="cake-layer">
          {alphabet[i]}
        </div>
      );
    }
    this.setState({ cake });
  }

  render() {
    return <div className="cake">{this.state.cake}</div>;
  }
}
