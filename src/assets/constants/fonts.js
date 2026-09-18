/**
 * @typedef {object} FontStyle
 * @property {string} fontFamily
 * @property {string} fontWeight
 */

/**
 * @typedef {object} TypographyPalette
 * @property {FontStyle} regular - Barlow 400
 * @property {FontStyle} medium - Barlow 500
 * @property {FontStyle} semibold - Barlow 600
 * @property {FontStyle} bold - Barlow 700
 * @property {FontStyle} extrabold - Barlow 800
 * 
 * 
 * @property {FontStyle} secondary - Inter 400
 */

/**@type {TypographyPalette} */

export const FONTS = {
    regular: {
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-regular)"
    },
    medium: {
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-medium)"
    },
    semibold: {
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-semibold)"
    },
    bold: {
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-bold)"
    },
    extrabold: {
        fontFamily: "var(--font-primary)",
        fontWeight: "var(--fw-extrabold)"
    },
    
    secondary: {
        fontFamily: "var(--font-secondary)",
        fontWeight: "var(--fw-secondary-fixed)"
    }
};