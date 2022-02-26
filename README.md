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
