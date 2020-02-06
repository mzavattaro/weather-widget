# Weather Widget

## Description

This is a simple weather widget that shows the daily weather forecast beased on the user's current location.
In order for the widget to accurately obtain the user's location, the user must agreee to allow the browser to collect their location data.
This widget does not store any user data.

The widget was built in React.js.

### Features

Clean minimalistic design that shows:
- 5 day weather forecast
- daily temperature
- daily wind speed
- weather description
- twilight hours
- user's location
- current day
- current weather icon
- date and time of weather forecast for that day

The user has the ability to scroll between each consecutive days.

This widget uses `navigator.geolocation` to retrieve the user's longitude and latitude and passes it into Open Weather's API to obtain the user's 5 Day / 3 Hour forecast for their current location.

This React app uses up-to-date methods such as Hooks (useState, useEffect), destructuring and CSS Grid. One of the aims was to use as few libraries as possible in order to keep the lightweight for performance reasons.


## Installation

### Step 1:

Unzip the source code downloaded from your email attachment.

### Step 2:

Open **weather-widget** directory folder either from the terminal or from your text editor of choice.

### Step 3:

Make sure the terminal is within **weather-widget** directory. From the terminal, install dependencies via `yarn install`.

### Step 4:

After `yarn install` has completed, you can run the weather widget on localhost with `yarn start` or build the widget for production with `yarn build`.

### Note:

This app requires the lastest version of Node.js to be installed. You can download Node.js directly from: (https://nodejs.org/en/download/) or via Homebrew `brew install node` if you're running macOS.


## Usage

To use the weather widget app, the user must agree to allow their browser to obtain their location data. A popup will appear requesting the user to allow or block geolocation. Once allowed, it may take a few moments for the weather widget to fetch the 5 day weather forecast from Open Weather Map. Once fetched, the widget will display the user's personal weather information on side scrollable cards. Each card shows the weather information for the next 5 days.

## Issues

The weather widget app uses Open Weather Map's free tiered 5 day/3 hour forecast for its weather API. This API may not show the user's weather information instantly as it can be slow to fetch directly from the API. It can sometimes take several seconds to several minutes to fetch API information.

## Roadmap

Due to time contraints, not all ideas were incorporated into the weather widget app. In the future, I'd like to:
- Clicking on a card opens a modal that shows more weather information
- Ability to toggle between degrees Celcius and Fahrenheit
- Migrate to a more reliable weather api that provides hourly weather updates
- Search capability to search for a specific location's weather
- Dark mode
- Progressive web app support
- Mobile friendly view
