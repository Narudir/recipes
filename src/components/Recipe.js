import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class Recipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editOpen: false,
        }
    }

    componentWillMount() {
        const recipe = this.props.recipe;
        const activeVersion = recipe.activeVersion;
        const title = recipe.versions.get(activeVersion).title;
        const content = recipe.versions.get(activeVersion).content;
        this.setState({title, content});
    }

    handleOpen = () => {
        this.setState({editOpen: true});
    };
    
    saveVersion = (title, content) => {
        if (
            (this.state.title === title && this.state.content === content) ||
            (this.state.title === "" || this.state.content === "")
        ) {
            this.setState({editOpen: false});
        } else {
            let newVersion = { title: this.state.title, content: this.state.content };
            this.props.sendNewVersion(this.props.recipeId, newVersion);
            this.setState({editOpen: false});
        }
    };

    render() {
        const recipe = this.props.recipe;
        const activeVersion = recipe.activeVersion;
        const title = recipe.versions.get(activeVersion).title;
        const content = recipe.versions.get(activeVersion).content;
        const actions = [
            <FlatButton
                label="Done"
                primary={true}
                keyboardFocused={true}
                onClick={() => this.saveVersion(title, content)}
            />,
        ];
        let versions = []; 
        for (let version of recipe.versions) {
            let versionClass = "version";
            if (recipe.activeVersion === version[0]) {
                versionClass = "version active";
            }
            versions.push(
                <li 
                    className={versionClass}
                    key={version[0]} 
                    onClick={() => this.props.switchVersion(this.props.recipeId, version[0])} 
                >
                    Version {version[0]}
                </li>
            );
        }
        return (
            <div>
                <h3 className="version_title">Recipe: {title}</h3>
                <span>Posted: {recipe.dateCreated}</span>
                <p className="content">Description: {content}</p>
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
                        defaultValue={title}
                        onChange={(e, value) => this.setState({title: value})}
                        fullWidth={true}
                    />
                    <TextField 
                        hintText="Content"
                        defaultValue={content}
                        multiLine={true}
                        rows={4}
                        onChange={(e, value) => this.setState({content: value})}
                        fullWidth={true}
                    />
                </Dialog>
                <ul className="versions">
                    {versions}
                </ul>
            </div>
        )
    }
}

export default Recipe