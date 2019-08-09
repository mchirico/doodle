export const hello = () => 'Hello world!';

export function sortAscending(tuples) {
    return tuples.sort((a, b) => {
        const valueA = a[1];
        const valueB = b[1];
        if (valueA == valueB) return 0;
        if (valueA > valueB) return 1;
        if (valueA < valueB) return -1;
    });
}

export function removeZeroes(tuples) {
    const output = [];
    tuples.forEach((tuple) => {
        if (tuple[1] !== 0) output.push(tuple);
        });
    return output;
}
