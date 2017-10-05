import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            date: null,
            content: "",
            titleErrorText: "",
            contentErrorText: ""
        }
        this.submitRecipe = this.submitRecipe.bind(this);
    }

    componentWillMount() {
        const todayDate = new Date();
        const formatDate = `${todayDate.getFullYear()}-${todayDate.getMonth() + 1}-${todayDate.getDate()}`;
        this.setState({date: formatDate});
    }

    submitRecipe() {
        this.state.title === "" ? 
        this.setState({titleErrorText: "Title is required."}) : 
        this.setState({titleErrorText: ""});

        this.state.content === "" ? 
        this.setState({contentErrorText: "Content is required."}) : 
        this.setState({contentErrorText: ""});

        if (this.state.title && this.state.content) {
            this.props.addRecipe({
                title: this.state.title,
                date: this.state.date,
                content: this.state.content
            });
        }
    }

    render() {
        return (
            <div className="add_recipe">
                <TextField 
                    hintText="Title" 
                    errorText={this.state.titleErrorText}
                    onChange={(e, value) => this.setState({title: value})}
                />
                <DatePicker 
                    hintText="Create date" 
                    mode="portrait"
                    defaultDate={new Date(this.state.date)}
                    onChange={(e, date) => this.setState({date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`})}
                />
                <TextField 
                    hintText="Content" 
                    errorText={this.state.contentErrorText} 
                    multiLine={true}
                    rows={4}
                    onChange={(e, value) => this.setState({content: value})} 
                />
                <RaisedButton 
                    label="Add recipe" 
                    primary={true}
                    className="add-btn" 
                    onClick={this.submitRecipe} 
                />
            </div>
        )
    }
}

export default AddRecipe