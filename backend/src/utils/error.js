class CustomError extends Error{
    constructor(starusCode, message){
        super(message);
        this.statusCode = starusCode
    }
}

const errorHandler = (statusCode, message)=> new CustomError(statusCode, message);
module.exports = errorHandler;