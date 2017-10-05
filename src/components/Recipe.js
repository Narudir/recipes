import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOpen: false,
            activeVersion: this.props.recipe.activeVersion,
            title: this.props.recipe.versions.get(this.props.recipe.activeVersion).title,
            date: this.props.recipe.versions.get(this.props.recipe.activeVersion).date,
            content: this.props.recipe.versions.get(this.props.recipe.activeVersion).content
        }
    }

    handleOpen = () => {
        this.setState({editOpen: true});
    };
    
    handleClose = () => {
        this.setState({editOpen: false});
    };
    
    render() {
        const actions = [
            <FlatButton
                label="Done"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
        let versions = []; 
        for (let version of this.props.recipe.versions) {
            versions.push(<li key={version[0]}>{version[0]} version</li>);
        }
        return (
            <div>
                <h3>{this.state.title}</h3>
                <span>Posted: {this.state.date}</span>
                <p className="content">{this.state.content}</p>
                <RaisedButton label="Edit" onClick={this.handleOpen} />
                <Dialog
                    title="Edit recipe"
                    actions={actions}
                    modal={false}
                    open={this.state.editOpen}
                    onRequestClose={this.handleClose}
                >
                    <TextField 
                        hintText="Title"
                        value={this.state.title}
                        onChange={(e, value) => this.setState({title: value})}
                        fullWidth={true}
                    />
                    <DatePicker 
                        hintText="Create date" 
                        mode="portrait"
                        value={new Date(this.state.date)}
                        onChange={(e, date) => this.setState({date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`})}
                        fullWidth={true}
                    />
                    <TextField 
                        hintText="Content"
                        value={this.state.content}
                        multiLine={true}
                        rows={4}
                        onChange={(e, value) => this.setState({content: value})}
                        fullWidth={true}
                    />
                    <ul className="versions">
                        {versions}
                    </ul>
                </Dialog>
            </div>
        )
    }
}

export default Recipe