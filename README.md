# Jest Course

https://javascript.tv.br/

## Debugging

Use [NDB](https://www.npmjs.com/package/ndb) for debugging, i.e.:

```js
const myFunc = () => {
  debugger; // Add this within your code blocks
  return 99;
}
```

And then run:

```
yarn test:debug Cart
```

### Notes

> Tools don't need to run with libraries. I.e.: there's not much sense working with Jest and Cypress, but there is when Jest and a Testing Library/Enzyme/Vue Test Utils, etc.
