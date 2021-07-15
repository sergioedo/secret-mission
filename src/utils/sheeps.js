const SHEEP_WIDTH = 75
const SHEEP_HEIGHT = 75

export const createFlock = ( {numSheeps, fieldWidth, fieldHeight, topMargin}) => {
    const sheeps = []
    for (let i = 0; i< numSheeps; i++) {
        sheeps.push({
            id: i,
            position: {
                x: Math.random() * (fieldWidth - SHEEP_WIDTH),
                y: topMargin + Math.random() * (fieldHeight - SHEEP_HEIGHT - topMargin),
            },
            width: SHEEP_WIDTH,
            height: SHEEP_HEIGHT,
            counted: false
        })
    }
    return sheeps
}

