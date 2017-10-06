import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { addRecipe } from '../actions'

class AddRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            titleErrorText: "",
            contentErrorText: ""
        }
        this.submitRecipe = this.submitRecipe.bind(this);
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
                content: this.state.content
            });
            this.setState({
                title: "",
                content: ""
            });
        }
    }

    render() {
        const fieldStyle = {width: "100%"};
        return (
            <div className="add_recipe">
                <TextField 
                    hintText="Title"
                    style={fieldStyle}
                    errorText={this.state.titleErrorText}
                    onChange={(e, value) => this.setState({title: value})}
                    value={this.state.title}
                />
                <TextField 
                    hintText="Content" 
                    style={fieldStyle}
                    errorText={this.state.contentErrorText} 
                    multiLine={true}
                    rows={4}
                    onChange={(e, value) => this.setState({content: value})}
                    value={this.state.content}
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

const mapDispatchToProps = dispatch => {
    return {
        addRecipe: recipe => {
            dispatch(addRecipe(recipe))
        }
    }
}

const AddRecipeContainer = connect(
    null,
    mapDispatchToProps
)(AddRecipe)

export default AddRecipeContainer