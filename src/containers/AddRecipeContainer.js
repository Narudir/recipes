import { connect } from 'react-redux'
import AddRecipe from '../components/AddRecipe'
import { addRecipe } from '../actions'

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