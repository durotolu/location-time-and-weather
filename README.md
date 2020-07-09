# Location, Time and Weather
Logs the current time and weather for locations given.

> Given an array of inputs (location name, postal code), log the current time and weather for those locations.
> Example: "./weather New York, 10005, Tokyo, São Paulo, Pluto"

## Built with Javascript and Axios

## Install

```sh
npm install
```

## Usage

```sh
npm start LOCATIONS
```

Parses command line arguments to runs the program.
No spaces between locations (only a comma).
Keep spaces within locations that traditionally contain spaces.

Example:

```sh
npm start Lagos,New York,New Zealand,London,Texas,New Jersey
```

Example output:

```sh
{ locationName: 'Lagos',
  currentTime: '5:38:43 PM',
  weather:
   { description: 'broken clouds',
     temp: 27,
     feels_like: 31.26,
     temp_min: 27,
     temp_max: 27,
     pressure: 1013,
     humidity: 83,
     visibility: 7000,
     windSpeed: 2.1 } }
{ locationName: 'New York',
  currentTime: '12:38:43 PM',
  weather:
   { description: 'clear sky',
     temp: 30.5,
     feels_like: 34.16,
     temp_min: 29,
     temp_max: 31.67,
     pressure: 1017,
     humidity: 66,
     visibility: 16093,
     windSpeed: 2.6 } }
```

## Testing with Jest
## Run tests

```sh
npm test
```

## Author

👤 **Modurotolu Olokode**

- Website: [modurotoluolokode.com](http://modurotoluolokode.com/)
- Github: [durotolu](https://github.com/durotolu)
