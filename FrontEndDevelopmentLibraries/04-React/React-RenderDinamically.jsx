// Example 1.
const textAreaStyles = {
    width: 235,
    margin: 5,
};

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            toDoList: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(",");
        this.setState({
            toDoList: itemsArray,
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value,
        });
    }
    render() {
        const items = this.state.toDoList.map((v) => <li>{v}</li>);
        return (
            <div>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.userInput}
                    style={textAreaStyles}
                    placeholder="Separate Items With Commas"
                />
                <br />
                <button onClick={this.handleSubmit}>Create List</button>
                <h1>My "To Do" List:</h1>
                <ul>{items}</ul>
            </div>
        );
    }
}

// Example 2.
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: "Jeff",
                    online: true,
                },
                {
                    username: "Alan",
                    online: false,
                },
                {
                    username: "Mary",
                    online: true,
                },
                {
                    username: "Jim",
                    online: false,
                },
                {
                    username: "Sara",
                    online: true,
                },
                {
                    username: "Laura",
                    online: true,
                },
            ],
        };
    }
    render() {
        const usersOnline = this.state.users.filter((v) => v.online);
        const renderOnline = usersOnline.map((v, i) => (
            <li key={i}>{v.username}</li>
        ));
        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>{renderOnline}</ul>
            </div>
        );
    }
}
