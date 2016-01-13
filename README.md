# JavaScript Challenge

## About
Node coding challenege for JavaScript Engineer Candidates

## Requirements
- Node.js
- npm

## Getting Started
- Fork repository and clone down the repo locally
- Navigate to the repository and run ``npm install``
- Run ``node server`` in the terminal to start serving files and navigate to ``localhost:8080``

## Instructions
- You are tasked with creating a simple RESTful API with one endpoint ``/wpnews/``
- This endpoint should pull data from our WordPress API ``http://ww2.staging.wpengine.com/perspectives/wp-json/wp/v2/posts``
- You should return the first 50 results from this API (the endpoint by default gives you 10) on a ``GET`` request
- You will also need to filter out all key value pairs in the data except for id, date, author name, title and excerpt
