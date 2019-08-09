export const hello = () => 'Hello world!'

export function sortAscending(tuples) {
    return tuples.sort((a, b) => {
        const valueA = a[1];
        const valueB = b[1];
        if (valueA == valueB) return 0;
        if (valueA > valueB) return 1;
        if (valueA < valueB) return -1;
    });
}
