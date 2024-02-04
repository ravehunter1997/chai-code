class ApiResponse{
    constructor(statusCode,data, message="success"){
        this.status = statusCode;
        this.data = data;
        this.success = statusCode < 400
        this.message = message
    }
}