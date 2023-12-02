### Repo to maintain course of react :tada: :rocket:

The core of the react is divided into two things `React` and `ReactDOM` , the first one contains the core of the react/algorithm to generate html and the later one is need for **Dom manipulation**

### React important functions

- `createElement` - this function is responsible for creating a react object, it takes three arguments
  - Tag to be created
  - The attributed to the tag
    - id, className , etc
  - What to put inside the element , if there are multiple elements , it can take array arguments as well
- `render` - renders the element into the browser DOM, also render element replaces the content if already present, it will not append content

**Example**

```js
/**
 * <div id="parent">
 *     <div id="child">
 *          <h1>H1 tag</h1>
 *           <h2>H2 tag</h2>
 *     </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "H1 tags"),
    React.createElement("h2", {}, "H2 tags")
  ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
```

**Sample react object**

```js
{
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
        "id": "parent",
        "children": {
            "type": "div",
            "key": null,
            "ref": null,
            "props": {
                "id": "child",
                "children": [
                    {
                        "type": "h1",
                        "key": null,
                        "ref": null,
                        "props": {
                            "children": "H1 tags"
                        },
                        "_owner": null,
                        "_store": {}
                    },
                    {
                        "type": "h2",
                        "key": null,
                        "ref": null,
                        "props": {
                            "children": "H2 tags"
                        },
                        "_owner": null,
                        "_store": {}
                    }
                ]
            },
            "_owner": null,
            "_store": {}
        }
    },
    "_owner": null,
    "_store": {}
}
```

A react element is just an object with props and props are the objects we pass

## Bundler

A bundler is a piece of software that makes the app ready for production

A **bundler** has the following responsibilites

- Treeshaking
- Minifying JS , CSS and HTML code
- Resizing and optimising the images
- Content hashing
- Automatic code splitting
- Compression of the application
- Code transpilation
- Differential bundling
- Workers etc
- Seperate Dev and production build
- Local server
- HMR - Hot module replacement
- File watching algorithm
- Code splitting
- Diagnostics
- Better error handling
- Gives way to host and test on https
