const addItem = (id,data) => {
    return {
        type: "ADD_ITEM",
        id: id,
        data: data
    }
}

export default addItem;