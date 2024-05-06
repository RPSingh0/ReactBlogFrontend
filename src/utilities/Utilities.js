export function getTitle(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function convertToTitle(input) {
    const words = input.split(/(?=[A-Z])/);
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

export function getFormattedDate(string) {
    const date = new Date(string);

    return date.toLocaleString('default', {month: 'short', year: 'numeric'})
}