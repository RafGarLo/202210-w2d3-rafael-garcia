export const strictEquals = (a, b) => {
    if (Object.is(a, 0) && Object.is(b, -0)) {
        return true;
    }
    if (Object.is(a, -0) && Object.is(b, 0)) {
        return true;
    }

    if (Number.isNaN(a) && Number.isNaN(b)) {
        return false;
    }
    return Object.is(a, b);
};

export const division = (a, b) => {
    let error0 = 'Error: invalid parameters entered';
    if (a === 0 || b === 0) {
        throw error0;
    }
    if (isNaN(a) || isNaN(b)) {
        throw error0;
    }
    return a / b;
};
