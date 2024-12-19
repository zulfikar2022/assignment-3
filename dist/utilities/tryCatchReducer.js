// This is the wrapper function that handles the try-catch logic
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req, res, next)).catch((error) => {
            next(error);
        });
    };
};
export default asyncHandler;
