const SHEEP_WIDTH = 75
const SHEEP_HEIGHT = 75
const SHEEP_SPEED = 1

export const createFlock = ( {numSheeps, fieldWidth, fieldHeight, topMargin}) => {
    const sheeps = []
    for (let i = 0; i< numSheeps; i++) {
        sheeps.push({
            id: i,
            position: {
                x: Math.random() * (fieldWidth - SHEEP_WIDTH),
                y: topMargin + Math.random() * (fieldHeight - SHEEP_HEIGHT - topMargin),
            },
            direction: {
                x: Math.random() > 0.5 ? 1 : -1,
                y: Math.random() > 0.5 ? 1 : -1,
            },
            width: SHEEP_WIDTH,
            height: SHEEP_HEIGHT,
            counted: false
        })
    }
    return sheeps
}

const getDirection = (direction, coordValue, minValue, maxValue) => {
    if (coordValue >= maxValue) return direction * -1
    if (coordValue <= minValue) return direction * -1
    return direction
}

export const moveSheeps = ({sheeps, fieldWidth, fieldHeight, topMargin}) => {
    return sheeps.map(sheep => {
        const newDirectionX = getDirection(sheep.direction.x, sheep.position.x, 0, fieldWidth - SHEEP_WIDTH)
        const newDirectionY = getDirection(sheep.direction.y, sheep.position.y, topMargin, fieldHeight - SHEEP_HEIGHT)
        return {
            ...sheep,
            direction: {
                x: newDirectionX,
                y: newDirectionY
            },
            position: {
                x: sheep.position.x + (SHEEP_SPEED * newDirectionX),
                y: sheep.position.y + (SHEEP_SPEED * newDirectionY)
            }
        }
    })
}
