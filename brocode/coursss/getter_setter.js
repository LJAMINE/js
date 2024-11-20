//getter =method meke a property readable
//setter =method meke a property writeable

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth
        } else {
            console.error("width shoild be positive")
        }
    }
    set height(newheith) {
        if (newheith > 0) {
            this._height = newheith
        } else {
            console.error("height shoild be positive")
        }
    }

    get width() {
        return this._width;
    }
    get height() {
        return this._height;
    }
}

const rectangle = new Rectangle(100000, 2)

rectangle.width = 5
rectangle.height = 100

console.log(rectangle.width)
console.log(rectangle.height)