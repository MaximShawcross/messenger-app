
export const contactDate = () => {
    const date = new Date();
    
    return (`${date.toLocaleString('en', { month: 'short' })} ${date.getDate()}, ${date.getFullYear()}`);
}

export const messegeDate = () => {
    const date = new Date();
    const month = ((date.getMonth())+1) < 10 ? `0${((date.getMonth())+1)}` : `${((date.getMonth())+1)}`

    return (`${date.getDate()}/${month}/${date.getFullYear()}`);
}

export const messegeTime = () => {
    const date = new Date();
    return (`${date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`);
}
    
