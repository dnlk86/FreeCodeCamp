import { React } from "react";

const JSX = function () {
    return (
        <div>
            <p>Paragraph One</p>
            <p>Paragraph Two</p>
            <p>Paragraph Three</p>
        </div>
    );
};

ReactDOM.render(JSX, document.getElementById("root"));

// React controlled form
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            submit: "",
        };
        this.handleChange = this.handleChange.bind(this); // binding this to the hadler functions
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value,
        });
    }
    handleSubmit(event) {
        event.preventDefault(); // preventing html forms default behavior on submit
        this.setState({
            submit: this.state.input,
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.input}
                    />
                    <button type="submit">Submit!</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        );
    }
}

// Pass a callback as a prop
class MyApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
        };
        this.handleChange = this.handleChange.bind(this); // bindig "this"
    }
    handleChange(event) {
        this.setState({
            inputValue: event.target.value,
        });
    }
    render() {
        return (
            <div>
                <GetInput
                    input={this.state.inputValue}
                    handleChange={this.handleChange} // passing down the handleChange function as a prop, it has access to state in the parent component
                />
                <RenderInput input={this.state.inputValue} />
            </div>
        );
    }
}

class GetInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Get Input:</h3>
                <input
                    value={this.props.input}
                    onChange={this.props.handleChange}
                />
            </div>
        );
    }
}

class RenderInput extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>Input Render:</h3>
                <p>{this.props.input}</p>
            </div>
        );
    }
}
