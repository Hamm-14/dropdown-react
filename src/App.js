import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItem: ["Yes", "Probable Not", "Lets Nacho", "Maza aa gaya"],
      buttonValue: null,
    };
  }

  render() {
    const { buttonValue, listItem } = this.state;
    return (
      <div className="App">
        <div id="dropdown-container">
          <h1>Should you use a dropdown ?</h1>
          <div id="dropdown-btn">
            <div id="btn-value">{buttonValue ? buttonValue : "Select"}</div>
            <div id="open-dropdown">
              <img
                src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                alt="open dropdown"
              />
            </div>
          </div>

          <div id="dropdown-list">
            {listItem.map((item) => {
              return <div className="list-item">{item}</div>;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
