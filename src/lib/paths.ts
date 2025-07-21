const localeRegex = /^\/(uk|en)(\/|$)/;

export function getPathWithoutLocale(path: string): string {
    return path.replace(localeRegex, '/');
}