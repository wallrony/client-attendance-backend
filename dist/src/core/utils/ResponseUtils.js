"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeResponse = void 0;
function makeResponse(response, status = 'bad-req', data = undefined) {
    if (!status.length)
        status = 'bad-req';
    if (status === 'error') {
        if (String(data).includes('users_email_unique')) {
            status = 'bad-req';
            data = 'email already in use';
        }
    }
    let code = statusCode[status];
    if (typeof (data) === 'string') {
        data = {
            message: data
        };
    }
    return response.status(code).json(data);
}
exports.makeResponse = makeResponse;
const statusCode = {
    'success': 200,
    'created': 201,
    'no-data': 400,
    'bad-req': 400,
    'unauthorized-user': 401,
    'not-found': 404,
    'internal-error': 500
};
//# sourceMappingURL=ResponseUtils.js.map