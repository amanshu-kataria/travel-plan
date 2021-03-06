# Map Plan Viewer

A single-page application to display all the available plans on the map and to create a plan as well.

![ithakafrontend](https://user-images.githubusercontent.com/13014093/32478680-15db9462-c3ac-11e7-8fc6-22552b6ea8a0.gif)

## Requirements
You will need:
- Latest version of <a href="https://nodejs.org/en/" target="_blank">NodeJS</a>.
- A <a href="http://www.github.com" target="_blank">GitHub</a> account.

## Setup
This application is already bootstrapped using `create-react-app`.

Once the app has been cloned, run the following commands:
- `npm install`
- `npm run start`

## Details
This project is split into 5 major components, namely the `NavBar`, `LeftPanel`, `CenterPanel`, `PlanCard` and `CreatePlan`.

### NavBar
The `Navbar` is of 50px containing the title and a button to create a plan.

### LeftPanel
The `LeftPanel` contains the plan card and its stops.

### CenterPanel
The `CenterPanel` has a map which highlights the cities listed on the plan when a plan is hover.

### PlanCard
The `PlanCard` displays the name on the top background image with a tint on it.
