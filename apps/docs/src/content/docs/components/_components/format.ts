export function formatCode(text: string) {
    const codeRegex = /`([^`]+)`/g;
    return text.replace(codeRegex, "<code>$1</code>");
}

export function formatQuotes(text: string) {
    const quoteRegex = /(')/g;
    return text.replace(quoteRegex, '"');
}

export function formatDescription(text: string) {
    return formatCode(formatQuotes(text));
}
