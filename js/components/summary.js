import React from 'react';
import Radium from 'Radium';

class Summary extends React.Component {
  render() {
    return (
      <article style={styles.article}>
        <header>
          <h1 className='headline' dangerouslySetInnerHTML={{__html: this.props.title.rendered}} />
          <div className='byline'>
            <address className='author' style={styles.address}>By <a rel='author' href={`https://ww2.kqed.org/perspectives/wp-json/wp/v2/users/${this.props.author}`}>{this.props.author}</a></address>
            {' on '}<time dateTime={this.props.date}>{new Date(this.props.date).toDateString()}</time>
          </div>
        </header>
        <div className='article-excerpt' style={styles.excerpt} dangerouslySetInnerHTML={{__html: this.props.excerpt.rendered}} />
      </article>
    );
  }
}

const styles = {
  article: {
    display: 'block',
    maxWidth: '600px',
    margin: '10px auto',
    padding: '0 18px'
  },
  excerpt: {
    paddingTop: '10px',
    fontSize: '1.3em',
    color: '#555'
  },
  address: {
    display: 'inline'
  }
}

export default Radium(Summary);
