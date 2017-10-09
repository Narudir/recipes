import { connect } from 'react-redux'
import RecipeList from '../components/RecipeList'
import { switchVersion } from '../actions/actions'
import { sendNewVersion } from '../actions/serverActions'

const mapDispatchToProps = dispatch => {
    return {
        switchVersion: (recipeId, versionId) => {
            dispatch(switchVersion(recipeId, versionId))
        },
        sendNewVersion: (recipeId, newVersion) => {
            dispatch(sendNewVersion(recipeId, newVersion))
        }
    }
}

const RecipeListContainer = connect(
    (state) => state,
    mapDispatchToProps
)(RecipeList)

export default RecipeListContainer