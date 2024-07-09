# Logging

A simple re-export of the JavaScript `console` class, which only runs if you set `logging.enabled = true`.

I use this for certain projects to toggle logging.

## Example

```js
import logging from 'https://raw.githubusercontent.com/WiDuMu/logging/main/dist/logging.js'

logging.enabled = true;

logging.log(`Hello World!`);
```