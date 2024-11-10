function intToHexColor(value) {
    let hexString;
    
    if (value > 0xFFFFFF) {
        // Handle ARGB (32-bit with alpha)
        let alpha = ((value >> 24) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
        let red = ((value >> 16) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
        let green = ((value >> 8) & 0xFF).toString(16).padStart(2, '0').toUpperCase();
        let blue = (value & 0xFF).toString(16).padStart(2, '0').toUpperCase();
        hexString = `#${alpha}${red}${green}${blue}`;
    } else {
        // Handle RGB (24-bit without alpha)
        hexString = value.toString(16).toUpperCase().padStart(6, '0');
        hexString = `#${hexString}`;
    }

    return hexString;
}
function hexToInt(hex) {
    // Remove the '#' if present
    if (hex.startsWith('#')) {
        hex = hex.slice(1);
    }

    // Parse the hex string into an integer
    const intValue = parseInt(hex, 16);

    return intValue;
}
let hexColor = intToHexColor(16711680); // Returns #FFFFFF
console.log(hexColor);
let intColor = hexToInt(hexColor); // Returns 4294198070
console.log(intColor);