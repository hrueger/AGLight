export function beautifyCamelCase(value: string): string {
    return value.replace(/([A-Z])/g, " $1").trim();
}
