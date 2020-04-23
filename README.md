# CheeseSns

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### dev

`cd dist/cheese-sns/`

`aws s3 sync . s3://sns-cheese-dev/web/ --delete --cache-control "max-age=25200"`

`aws s3 sync --profile cheese . s3://sns-cheese-dev/web/ --delete --cache-control "max-age=25200"`

`aws cloudfront create-invalidation --distribution-id E23XA7L6Q4V6WG --paths "/*"`

`aws cloudfront create-invalidation --profile cheese --distribution-id E23XA7L6Q4V6WG --paths "/*"`

### prod

`cd dist/cheese-sns/`

`mv index.prod.html index.html`

`aws s3 sync . s3://sns-cheese-prod/web/ --delete --cache-control "max-age=25200"`

`aws s3 sync --profile cheese . s3://sns-cheese-prod/web/ --delete --cache-control "max-age=25200"`

`aws cloudfront create-invalidation --distribution-id E23XA7L6Q4V6WG --paths "/*"`

`aws cloudfront create-invalidation --profile cheese --distribution-id E23XA7L6Q4V6WG --paths "/*"`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
