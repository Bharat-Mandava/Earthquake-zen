// Convert timestamp to readable date
export const convertTime = (timestamp) => {
    const readableDate = new Date(timestamp);
    return readableDate.toLocaleString('en-US', {month:'short', day: 'numeric', year:'numeric', hour: 'numeric', minute: 'numeric', });
}