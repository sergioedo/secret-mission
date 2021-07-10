const SHEEP_WIDTH = 50
const SHEEP_HEIGHT = 50

export const createFlock = ( {numSheeps, fieldWidth, fieldHeight, topMargin}) => {
    const sheeps = []
    for (let i = 0; i< numSheeps; i++) {
        sheeps.push({
            id: i,
            position: {
                x: Math.random() * (fieldWidth - SHEEP_WIDTH),
                y: topMargin + Math.random() * (fieldHeight - SHEEP_HEIGHT - topMargin)
            }
        })
    }
    console.log(sheeps)
    return sheeps
}

