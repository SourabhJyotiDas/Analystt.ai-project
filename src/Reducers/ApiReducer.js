const ApiReducer = (state, action) => {

    switch (action.type) {
        case "GET_UPDATE_API":
            let updatedProduct = action.payload.map((element) => {
                return {
                    ...element,
                    btnTxt: "View Details"
                }
            })
            return {
                ...state,
                ourData: updatedProduct,
            }


        case "SHOW_HIDE_BTN":
            let updateHideFunction = state.ourData.map((element) => {
                if (element.id === action.payload) {
                    let newText;
                    if (element.btnTxt === "View Details") {
                        newText = "Hide Details"
                    } if (element.btnTxt === "Hide Details") {
                        newText = "View Details"
                    }
                    return {
                        ...element,
                        btnTxt: newText

                    }
                } else {
                    return element
                }
            })
            return {
                ourData: updateHideFunction
            }


        default: return state
    }
}

export default ApiReducer