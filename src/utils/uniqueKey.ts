
//Creates Unique Keys for Map Purpose;


const generateUniqueKey = () => {
    const timestamp = Date.now().toString(36); // Convert timestamp to base 36
    const randomNum = Math.random().toString(36).substr(2, 5); // Get a random number in base 36
    return `${timestamp}-${randomNum}`; // Combine them to form a unique key
};

export default generateUniqueKey;