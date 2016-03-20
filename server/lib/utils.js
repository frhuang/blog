export function loginSuccess(data) {
    const { bl = '1', msg = 'login success', error = false } = data || {};
    return {
        data: {
            bl,
            msg,
            error
        }
    }
}

export function loginFailure(data) {
    const { bl = '0', msg = 'login failure', error = true } = data || {};
    return {
        data: {
            bl,
            msg,
            error
        }
    }
}

export function publishSuccess(data){
    const { bl = '1', isPublish = true, error = false } = data || {};
    return {
        data: {
            bl,
            isPublish,
            error
        }
    }
}

export function publishFailure(data){
    const { bl = '0', isPublish = false, error = true } = data || {};
    return {
        data: {
            bl,
            isPublish,
            error
        }
    }
}