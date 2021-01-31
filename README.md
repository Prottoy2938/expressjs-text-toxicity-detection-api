# Expressjs Text Toxicity Detection API Starter

> The primary working route is `/` and the method is POST. The API route expects a body property named `text` which will be the sentence you want to check, and will return the result.

<br />

**You can modify the whole template to your match your needs**

## How Its Built

- Its uses [Tensorflow Text Toxicity](https://github.com/tensorflow/tfjs-models/tree/master/toxicity) model to check toxicity level
- The API is built on Nodejs with help from Express

## Usage

Code sample:

```js
const {
  data: { result },
} = await axios.post("https://text-toxicity-detection.herokuapp.com/", {
  text:
    "Please Stop. If you continue to vandalize Wikipedia, as you did to Kmart, you will be blocked from editing.",
});
```

## Use Cases

- Quickly deploying an API that can filter out inappropriate comments such as general insult, threat, identity attacks, sexual explicit comments from application.

## Demo

Heres a demo application where the API is used: https://detect-text-toxicity.vercel.app/
