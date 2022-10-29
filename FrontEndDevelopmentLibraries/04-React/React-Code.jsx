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
