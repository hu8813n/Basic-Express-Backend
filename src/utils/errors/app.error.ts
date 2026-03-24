export interface AppError extends Error {
    statusCode: number;
}

export class InternalServerError implements AppError {
    name: string;
    message: string;
    statusCode: number;

    constructor(message?: string) {
        this.name = 'InternalServerError';
        this.message = message || 'Something went wrong';
        this.statusCode = 500;
    }
}
