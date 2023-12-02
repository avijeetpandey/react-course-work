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

### JSX

**Note** `JSX and React are different they are not same, we can write react apps without jsx as well`

`JSX` is a html like convention that allows us to merge writting **HTML** and **Javascript** together, JSX is just a syntax that boils down to a react element, its not HTML

JSX - Transpiled(Babel) - > converted to React.createElement() -> renders in the browser

### Components in react

There are two types of components in react eco system

- Class based components
- Functional components ( normal javascript function)
  - Whenever you are creating a component always start with **Capital letter** or you will get an error

**Example**

```js
function Component() {
  return <div>Hello world</div>;
}

// usage
<Component />;
```

### Props

Passing data to a react component is called props

**Example**

```js
<Component name="prop name">

// here name is a prop
```
