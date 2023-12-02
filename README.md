### Repo to maintain course of react :tada: :rocket:

The core of the react is divided into two things `React` and `ReactDOM` , the first one contains the core of the react/algorithm to generate html and the later one is need for **Dom manipulation**

### React important functions

- `createElement` - this function is responsible for creating a react object, it takes three arguments
  - Tag to be created
  - The attributed to the tag
    - id, className , etc
  - What to put inside the element , if there are multiple elements , it can take array arguments as well
- `render` - renders the element into the browser DOM

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
