export type Theme = "dark" | "light";

/** Versioned so a later palette change can migrate without reading a stale value. */
export const THEME_STORAGE_KEY = "theme:v1";

export function readStoredTheme(): Theme | null {
    try {
        const stored = localStorage.getItem(THEME_STORAGE_KEY);
        if (stored === "dark" || stored === "light") {
            return stored;
        }
        return null;
    } catch {
        return null;
    }
}

export function systemTheme(): Theme {
    return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
}

export function resolveTheme(): Theme {
    return readStoredTheme() ?? systemTheme();
}

export function applyTheme(theme: Theme, persist: boolean) {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.classList.toggle("light", theme === "light");
    if (!persist) {
        return;
    }
    try {
        localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
        // Private mode, quota, or storage disabled. The class still updates.
    }
}

/**
 * Runs from an inline script in <head> before first paint.
 * Dark is the default. A stored choice wins; otherwise follow the system.
 */
export const themeInitScript = `(function(){try{var key=${JSON.stringify(THEME_STORAGE_KEY)};var stored=localStorage.getItem(key);var theme=stored==="light"||stored==="dark"?stored:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");var root=document.documentElement;root.classList.toggle("dark",theme==="dark");root.classList.toggle("light",theme==="light");}catch(e){}})();`;
