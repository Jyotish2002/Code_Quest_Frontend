const questionreducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case "POST_QUESTION":
            return { ...state }; // Add logic if needed
        case "FETCH_ALL_QUESTIONS":
            return { ...state, data: action.payload };
        case "POST_ANSWER":
            return { ...state }; // Add logic if needed
        default:
            return state;
    }
};
export default questionreducer;
