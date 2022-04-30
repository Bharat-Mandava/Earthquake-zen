// Convert timestamp to readable date
export const convertTime = (timestamp) => {
    const readableDate = new Date(timestamp);
    const options = {month:'short', day: 'numeric', year:'numeric', hour: 'numeric', minute: 'numeric', }
    return readableDate.toLocaleString('en-US', options);
}