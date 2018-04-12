# NYT Article Viewer

This app allows a user to search for current and historical news articles from the New York Times API. 

## Usage

When the app loads, the user will see a form with a date picker for start date, date picker for end date, search text field and a disabled submit button. The user must enter a start date, end date, and search text in the form in order for the submit button to be enabled. 

An image will show under the form, initially, but will be replaced with a list of news articles based on the search criteria entered. 

When articles are found, each news article will contain an image, a snippet of the article, and the author if available. If there is no image, a placeholder image will display. The user can click on the image that is displayed and it will open a new tab in the browser so the user can read the full article.

After the news articles display, a drop down will display for sorting the articles in the list. The default sort order is set to sort by publication date so that the most current articles will display first in the list. The user can select to sort the news articles list by word count as well so that the articles with the lowest word count will display first in the list. 

If no articles are found, the image that is seen when the app loads will display.

## Setup

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

* Fork the project
* Clone the project
* Install node 6 or greater: [https://nodejs.org/en/](https://nodejs.org/en/)
* Install yarn: [https://yarnpkg.com/en/docs/install](https://yarnpkg.com/en/docs/install)
* Install project dependencies: `yarn install`
* To start the app: `yarn start`
* To run the tests: `yarn test`

This project uses the [New York Times API](https://developer.nytimes.com/).
* This site requires an API be obtained. Refer to the site above on obtaining your own API key.
* Once obtained, replace the apiKey in the /actions/articles.js file.








