
const parent = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"Aanchal"),
             React.createElement("h2",{},"Aanchal1"),
        ]),
        React.createElement("div",{id:"child"},
            [React.createElement("h1",{},"Aanchal"),
            React.createElement("h2",{},"Aanchal1"),
        ])
    ]
);


console.log(parent);

// const heading = React.createElement("h1", {id: "heading"},"Hello react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);