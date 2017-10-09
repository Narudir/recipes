import AddRecipe from '../components/AddRecipe'
import { sendNewRecipe } from '../actions/serverActions'
import { connect } from 'react-redux'


const mapDispatchToProps = dispatch => {
    return {
        addRecipe: (id, recipe) => {
            dispatch(sendNewRecipe(id, recipe))
        }
    }
}

const AddRecipeContainer = connect(
    (state) => state,
    mapDispatchToProps
)(AddRecipe)

export default AddRecipeContainer