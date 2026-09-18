export const setItemInLocalstorage = (key, dataArray) =>{
    try {
        localStorage.setItem(key , JSON.stringify(dataArray))        
    } catch (error) {
        console.log(`error in ${key} when setItem`, error);
    }
}


export const getItemFromLocalstorage = (key)=>{
    try {
        const data = localStorage.getItem(key)
        return data ? JSON.parse(data) : []
    } catch (error) {
        console.log(`error in ${key} when getItem` , error);
    }

}

export const removeFromLocalstorage =(key , deletedId) =>{
    try {
        const currentData = getItemFromLocalstorage(key)

        const newData = currentData.filter(item => parseInt(item.id) !== parseInt(deletedId))

            const reorderedData = newData.map((item,index)=>{
                if (item.hasOwnProperty('cardNumber') || item.cardNumber !== undefined) {
                    const currentOrder = index + 1; 
                    const formattedNumber = currentOrder.toString().padStart(2, '0');

                    return{
                        ...item,
                        cardNumber: formattedNumber
                    }
                }
                return item
            })
        setItemInLocalstorage(key , reorderedData)
        return reorderedData
    } catch (error) {
        console.log(`error when remove`, error)
    }
}




// export const addToLocalstorage = (key , newItem)=>{
//     try {
//         const currentData = getItemFromLocalstorage(key)

        
//         const counterKey = `${key}_counter`
//         let lastSavedId = parseInt(localStorage.getItem(counterKey)) || 0
//         const nextId = lastSavedId + 1

//         localStorage.setItem(counterKey, nextId.toString())

//         const itemWithId = { id: nextId, ...newItem }
//         const newData = [...currentData, itemWithId]

//         setItemInLocalstorage(key , newData)
//         return newData

//     } catch (error) {
//         console.log(`error when add item ${key}` , error)
//     }
// } 

export const updateLocalstorage = (key , itemId , updatedField) =>{
    const currentData = getStorageData(key)

    const updatedData = currentData.map(item => {
        if (parseInt(item.id) === parseInt(itemId)) 
            return { ...item, ...updatedData }

        return item
        console.log("update Dooooone")
    })
    setItemInLocalstorage(key , updatedData)
    return updatedData
}


export const addToLocalstorage = (key , newItem)=> {
    try {
        const currentData = getItemFromLocalstorage(key)

        const counterKey = `${key}_counter`

        let lastSavedId = localStorage.getItem(counterKey)

        if(!lastSavedId){
            const maxIdInArray = currentData.reduce((max , item) => {
            const itemId = parseInt(item.id) || 0
            return itemId > max ? itemId : max
        },0)

        lastSavedId = maxIdInArray
        }else{
            lastSavedId = parseInt(lastSavedId)
        }


        const nextId = lastSavedId + 1
        localStorage.setItem(counterKey, nextId.toString())

        const itemWithId = {id: nextId , ...newItem}
        const newData = [...currentData, itemWithId]

        setItemInLocalstorage(key , newData)
        return newData
    } catch (error) {
        console.log(`error when add item ${key}` , error)
    }
}