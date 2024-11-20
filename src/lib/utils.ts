import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function translate(
    text: any,
    language: string,
    defaultLanguage?: string,
) {
    return text[language] || text[defaultLanguage || 'en'];
}
