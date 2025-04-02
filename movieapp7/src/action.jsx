
const ADDLIST = (ids)=>{
    return {
        type: 'ADDLIST',
        payload: ids
    }
}
const REMOVELIST = (ids)=>{
    return {
        type: 'REMOVELIST',
        payload: ids
    }
}
const PAGES = () => {
    return {
        type: 'PAGES',
        payload: 1,
    }
}

export{ADDLIST, REMOVELIST, PAGES}