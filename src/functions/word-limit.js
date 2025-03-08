const truncateText = (text, wordLimit) => {
    // Split the text into an array of words
    const words = text.split(" ");

    // Check if the word count exceeds the limit
    if (words.length > wordLimit) {
        // Join the first `wordLimit` words and add an ellipsis
        return words.slice(0, wordLimit).join(" ") + "...";
    }

    // If the word count is within the limit, return the original text
    return text;
};

export default truncateText;
