
export const FontMenu = (size = 16, color = 'rgb(255, 255, 255)') => {
    return `
       font-size: ${size}px;
       font-weight: 600;
       color: ${color};
       line-height: 1.375;
    `
}
export const FontBody = (size = 15, color = 'rgb(105, 105, 105)', weight = "400") => {
    return `
       font-size: ${size}px;
       font-weight: ${weight};
       color: ${color};
       line-height: 1.4;
    `
}
