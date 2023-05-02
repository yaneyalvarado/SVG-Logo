class SVG {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    } 
    render() {
        return `<svg version="1.1" width="250" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
    setText(alert, color) {
        if (alert.length > 3) {
            throw new Error("SVG must be 3 characters or less.");
        }
        this.textEl = `<text x="120" y="105" font-size="60" text-anchor="middle" fill="${color}">${alert}</text>`;
    } 
setShape(shape) {
    this.shapeEl = shape.render();
}
}
module.exports = SVG;