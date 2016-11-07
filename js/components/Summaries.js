import React from 'react';
import Summary from './Summary.js';

class Summaries extends React.Component {
  componentWillMount() {
    this.props.fetchSummaries();
  }

  render() {
    let key = 1;
    return (
      <div>
        {this.props.summaries.map(summary =>
          <Summary key={key++}
            author={summary.author}
            title={summary.title}
            date={summary.date}
            excerpt={summary.excerpt}
          />
        )}
      </div>
    );
  }
}

export default Summaries;
