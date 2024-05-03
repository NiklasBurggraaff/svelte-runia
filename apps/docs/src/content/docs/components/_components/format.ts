const codeRegex = /`([^`]+)`/g;
const quoteRegex = /(')/g;

export function formatCode(text: string) {
    return text.replace(codeRegex, "<code>$1</code>");
}

export function formatQuotes(text: string) {
    return text.replace(quoteRegex, '"');
}

export function formatText(text: string) {
    return text.replace(codeRegex, (_, p1) => `<code>${formatQuotes(p1)}</code>`);
}
