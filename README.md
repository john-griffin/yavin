# Yavin

The Ember frontend to [CrawlsofLondon.com](http://www.crawlsoflondon.com). The 
source code for the backend API, written in Ruby on Rails can be found 
[here](https://github.com/john-griffin/endor).

## Highlights

* Admin mode allows a user to create crawls with stops. All crawls are public 
but only the owner of the crawl can edit it.
* Stops are added using Foursquare integration to search for venues. Uses a 
custom Ember Data adapter and serializer.
* Photo picker component allows for quick customisation of each stop.
* Fully acceptance tested with stubbed out API requests using the excellent 
[pretender](https://github.com/trek/pretender). Tests can be run by following 
the steps bellow.
* Responsive styling using Foundation, Bourbon and a little 
[flexbox](http://caniuse.com/flexbox). All written in SASS.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Deployed to Heroku using the 
[Ember CLI buildpack](https://github.com/tonycoco/heroku-buildpack-ember-cli).
