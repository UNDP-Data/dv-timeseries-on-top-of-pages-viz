# Project Title
This project is for the top line visualization on the different pages (region pages, country pages and signature solution pages) of Data Futures Platform.

__Link for the visualization__
[https://undp-ss-viz.netlify.app/](https://undp-ss-viz.netlify.app/)

__Images for the visualization__

* Country Visualization (this is an example for India)
![Country Viz](readmeImgs/CountryViz.png)
* Region Visualization (this is an example for South Asia)
![Region Viz](readmeImgs/RegionViz.png)
* Signature Solution Visualization (this is example for Energy)
![Signature Solution Viz](readmeImgs/SSViz.png)

__Steps to Integrating the Visualization in the Data Future Platform or Any Other Page__
_Only editor and admins of Data Futures Platform are allowed to edit pages and embed the visualization in any page._

Regional visualization will be rendered within the following div on a static page:
```
<div data-bucket-region-top-graphs-embed class="region~<Use Region Code Here>"></div>
```

Country visualization will be rendered within the following div on a static page:
```
<div data-bucket-country-top-graphs-embed class="country~<Use Country Alpha-3 Code Here>"></div>
```
_If the class is not mentioned then the code uses the last 3 character of the URL as the country code_

Signature Solution visualization will be rendered within the following div on a static page:
```
<div data-bucket-top-graphs-embed class="signatureSolution~<Use Signature Solutions Here>"></div>
```
_Replace ` ` with a `+`_
Available values for Signature solutions in the class element:
* Poverty+and+Inequality
* Environment
* Gender
* Energy
* Resilience
* Governance

Apart from the mentioned `div` above the following `script` and `link` needs to be added to the `head` or in the embed code
```
<script defer src="<Link to the Visualization Mentioned Above>/static/js/main.js"></script>
<link rel="stylesheet" href="https://undp-data.github.io/stylesheets-for-viz/style/mainStyleSheet.css" />
<link rel="stylesheet" href="https://undp-data.github.io/stylesheets-for-viz/style/StyleForGraphingInterface.css" />
<link rel="stylesheet" href="https://undp-data.github.io/stylesheets-for-viz/style/StyleForGraph.css" />
```

__Pages Where the Visualization is Used__
The visualization are the top line visualization on the gray background on the following pages
* [Signature Solution - Poverty and Inequality](https://data.undp.com/topics/poverty-and-inequality)
* [Signature Solution - Resilience](https://data.undp.com/topics/resilience)
* [Signature Solution - Governance](https://data.undp.com/topics/governance)
* [Signature Solution - Energy](https://data.undp.com/topics/energy)
* [Signature Solution - Environment](https://data.undp.com/topics/environment)
* [Signature Solution - Gender Equality](https://data.undp.com/topics/gender-equality)
* This is also used in the Country pages in DFP. For ex. [here](https://data.undp.acsitefactory.com/countries/AFG)
* This is also used in the Regional pages in DFP. For ex. [here](https://data.undp.acsitefactory.com/countries/AFG)

## Features
These are the top line visualizations to give an overview about a page.
For the country visualization the visualization can use the URL to identify the country. For ex. http://localhost:5173/IND will show the visualization for India.

## Related Repos
* [__Indicators-MetaData__](https://github.com/UNDP-Data/Indicators-MetaData): This is the metadata sheet for indicators used in the visualization
* [__country-taxonomy-from-azure__](https://github.com/UNDP-Data/country-taxonomy-from-azure): This is data sheet with meta data for Countries
* [__Access-All-Data-Data-Repo__](https://github.com/UNDP-Data/Access-All-Data-Data-Repo): This is the data sheet for visualization
* [__stylesheet-for-viz__](https://github.com/UNDP-Data/stylesheets-for-viz): Repo which defines the css settings for the project

__Link for stylesheets__
* https://undp-data.github.io/stylesheets-for-viz/style/mainStyleSheet.css
* https://undp-data.github.io/stylesheets-for-viz/style/StyleForGraphingInterface.css
* https://undp-data.github.io/stylesheets-for-viz/style/StyleForGraph.css

## Build with
* __React__: Used as MVC framework.
* __styled-components__: Utilizes tagged template literals and the power of CSS, allows to write actual CSS code to style the components in JS/TS.
* __Various D3 Libraries__: Used for visualizations, adding interaction and reading the csv data file.
* __AntD__: For UI elements like dropdown, buttons, checkbox, and slider.
* __lodash__: Used for manipulating and iterating arrays and objects.
* __undp-viz-colors__: This is package for defining the visualization color palette.

## Installation
This project uses `npm`. For installation you will need to install `node` and `npm`, if you don't already have it. `node` and `npm` can be installed from [here](https://nodejs.org/en/download/).

To install the project, simply clone the the repo and them run `npm install` in the project folder. You can use terminal on Mac and Command Prompt on Windows.

This project is bootstrapped with [`Vite`](https://vitejs.dev/) and was created using `npm create vite@latest` command.

Run the terminal or command prompt and then run the following

```
git clone https://github.com/UNDP-Data/dv_signature_solutions_aggreated_timeseries.git
cd dv_signature_solutions_aggreated_timeseries
npm install
```

## Local Development
To start the project locally, you can run `npm run dev` in the project folder in terminal or command prompt.

This is run the app in development mode. Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

## Available Scripts
* `npm run dev`: Executes `vite` and start the local server for local deployment.
* `npm run build`: Executes `tsc && vite build` and builds the app for production and deployment.

## Tooling Setup
This project uses ESLint integrated with prettier, which verifies and formats your code so you don't have to do it manually. You should have your editor set up to display lint errors and automatically fix those which it is possible to fix. See [http://eslint.org/docs/user-guide/integrations](http://eslint.org/docs/user-guide/integrations).

This project is build in Visual Studio Code, therefore the project is already set up to work with. Install it from [here](https://code.visualstudio.com/) and then install this [eslint plugin](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and you should be good to go.

## Author
Design and development: [**Mustafa Saifee**](mailto:mustafa.saifee@undp.org)