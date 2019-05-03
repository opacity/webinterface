# Web Interface

'Webinterface' is Opacity's official interface for users to create a file storage account, pay, initiate file uploads/downloads, and store their files securely. It calculates how much OPQ users pay for a storage plan and provides an address to send payment. It shows file upload progress and gives the user a handle to retrieve a file in the future. Webinterface allows anyone to download a file that they have the handle for.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Clone the repo

```
git clone https://github.com/opacity/webinterface.git
```

Install dependencies

```
npm ci
```

Start web server

```
npm start
```

Navigate to url

[http://localhost:3001/](http://localhost:3001/)

### Deploying

Clone the repo

```
git clone https://github.com/opacity/webinterface.git
```

Install dependencies

```
npm ci
```

Build static assets

```
npm run build
```

## Running the tests

### Unit Tests (Jest)

Run Once

```
npm test
```

Run with watcher

```
npm test:watch
```

Run with code coverage

```
npm test:coverage
```

### End to End Tests ([Cypress](https://www.cypress.io/))

Run

```
npm cypress:open
```

Run and publish results to [Cypress Dashboard](https://dashboard.cypress.io/#/projects/runs)

```
npm cypress:publish
```

### Coding style tests

ES Lint is configured to run on compile, you will see warnings in the console in regards to code style. Eventually, we will start failing the build when code style warnings appear.

https://docs.cypress.io/guides/references/best-practices.html

## Deployment

Save the Opacity SSH Key for AWS (found on 1password) in ~/.ssh/opacity.pem

SSH into server

```
ssh ubuntu@18.218.209.199 -i ~/.ssh/opacity.pem
```

Run these commands

```
cd /var/www/storage
sudo su
git pull
```

## Built With

- [React](https://reactjs.org/) - The web framework used
- [Redux](https://redux.js.org/) - State Management
- [IOTA](https://github.com/iotaledger/iota.lib.js/) - IOTA Core API
- [Webpack](https://webpack.js.org/) - Build tools

## Project Status

- [Travis CI Builds](https://travis-ci.org/opacity/webinterface) - Build Report
- [E2E Test Dashboard (Cypress)](https://www.cypress.io/) - E2E test results
- [Code Climate](https://codeclimate.com/github/opacity/webinterface) - Reports code coverage, maintainability, and trends

## Contributing

Please read [CONTRIBUTING.md](https://github.com/opacity/webinterface/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

See also the list of [contributors](https://github.com/opacity/webinterface/graphs/contributors) who participated in this project.
