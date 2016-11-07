import React from 'react';

class Summary extends React.Component {
  render() {
    return (
      <article>
        <header>
          <h1 className={'headline'} dangerouslySetInnerHTML={{__html: this.props.title.rendered}} />
          <div className={'byline'}>
            <address className={'author'}>By <a rel={'author'} href={`https://ww2.kqed.org/perspectives/wp-json/wp/v2/users/${this.props.author}`}>{this.props.author}</a></address>
            on <time dateTime={this.props.date}>{new Date(this.props.date).toDateString()}</time>
          </div>
        </header>
        <div className={'article-excerpt'} dangerouslySetInnerHTML={{__html: this.props.excerpt.rendered}} />
      </article>
    );
  }
}

export default Summary;
