imp;
const heading = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hello from react"),
    React.createElement("h1", {}, "Hello from react")
]), React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hello from react"),
    React.createElement("h1", {}, "Hello from react")
]));
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=index.6bd02f5a.js.map
