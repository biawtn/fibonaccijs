function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    let numero1 = 0;
    let numero2 = 1;
    let proximo;

    for (let i = 2; i <= n; i++) {
        proximo = numero1 + numero2;
        numero1 = numero2;
        numero2 = proximo;
    }

    return numero2;
}

module.exports = fibonacci;
