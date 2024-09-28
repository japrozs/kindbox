export const userTypeObject = {
    RES: "Restaurant",
    CHA: "Charity",
};

export const autoCapitalizeSentence = (str: string): string => {
    return str
        .split(" ")
        .map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ");
};
