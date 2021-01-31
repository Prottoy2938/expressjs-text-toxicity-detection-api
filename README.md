# Expressjs Text Toxicity Detection API Starter

> The primary working route is `/` and the method is POST. The API route expects a body property named `text` which will be the sentence you want to check, and will return the result.

<br />

**You can modify the whole template to your match your needs**

A usage Example:

```js
const {
  data: { result },
} = await axios.post("https://text-toxicity-detection.herokuapp.com/", {
  text:
    "Please Stop. If you continue to vandalize Wikipedia, as you did to Kmart, you will be blocked from editing.",
});
```

<br />

Heres a demo application where I used the API: https://detect-text-toxicity.vercel.app/
