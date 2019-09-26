

export const setFieldsValue = (name,value)=>({
    type:'ADD_FIELD_VALUE',
    name:name,
    value:value
})

export const setTaskList = (tasklist)=>({
type:'ADD_TASK',
tasklist:tasklist
})

export const deleteTask = (todo)=>({
    type:'DELETE_TASK',
    todo:todo
})
export const editTask = (todo,i)=>({
    type:'EDIT_TASK',
    index:i,
    todo:todo
})
export const setEditedList = ()=>({
    type:'SET_EDITED_LIST',
})
export const setDateFieldsValue = (name,value,days)=>({
    type:'SET_DATE_FIELD',
    name:name,
    value:value,
    days:days

})


