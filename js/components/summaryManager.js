import { connect } from 'react-redux';
import Summaries from './Summaries.js';
// helpers
import 'whatwg-fetch';

const mapStateToProps = (state) => ({ summaries: state.summaries });

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSummaries: () => {
      fetch('http://ww2.kqed.org/perspectives/wp-json/wp/v2/posts')
        .then(response => response.json())
        .then(response => {
          const summaries = response.map(post => {
            return {
            title: post.title,
            date: post.date,
            author: post.author,
            excerpt: post.excerpt
          }});
          for (let summary of summaries) {
            dispatch({ type: 'ADD_SUMMARY', payload: summary });
          }
        });
    }
  };
};

const SummaryManager = connect(mapStateToProps, mapDispatchToProps)(Summaries);

export default SummaryManager;