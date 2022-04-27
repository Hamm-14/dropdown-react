import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listItem: [
        "BMW",
        "Mercedes",
        "Audi",
        "Volvo",
        "Land Rover",
        "Ferrari",
        "Rolls Royce",
      ],
      buttonValue: null,
      hovering: false,
    };
  }

  handleButtonHover = () => {
    this.setState({
      hovering: true,
    });
  };

  handleListItemClick = (item) => {
    this.setState({
      buttonValue: item,
      hovering: false,
    });
  };

  handleArrowClick = () => {
    let { hovering } = this.state;
    let toggleHovering = hovering ? false : true;
    this.setState({
      hovering: toggleHovering,
    });
  };

  render() {
    const { buttonValue, listItem, hovering } = this.state;
    return (
      <div className="App">
        <div id="dropdown-container">
          <h1>Let's choose your favourite car brand from a dropdown !</h1>
          <div id="dropdown-btn" onMouseEnter={this.handleButtonHover}>
            <div id="btn-value">{buttonValue ? buttonValue : "Select"}</div>
            <div id="open-dropdown" onClick={this.handleArrowClick}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/32/32195.png"
                alt="open dropdown"
              />
            </div>
          </div>

          <div id="dropdown-list">
            {hovering
              ? listItem.map((item) => {
                  return (
                    <div
                      className="list-item"
                      onClick={() => this.handleListItemClick(item)}
                      key={listItem.indexOf(item)}
                    >
                      <span>{item}</span>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
