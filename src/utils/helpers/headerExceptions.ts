const headerExceptions = [
    "admin",
];

export const useExcept = (path: string) =>
    !headerExceptions.includes(path.split("/")[1]);
