const messagesURL = 'https://trello.com/b/IUOxOY5z/misi%C3%B3n-secreta-cms.json'

export const testMessages = [
    { text: 'Se venden burras en el sotano de la bodega', theme: 'dark' },
    {
      text: 'No pidas el plato especial del chef en el bar del pueblo',
      theme: 'light',
    },
    {
      text: 'Si has llegado a leer esto, estás muy aburrido.... :P',
      theme: 'dark',
    },
  ]

export const getMessages = (getSecretAttribute) => {
    return fetch(messagesURL)
        .then(res => res.json())
        .then(data => {
            return data.cards.map(card => {
                return {
                    text: card.desc,
                    theme: findTheme(card),
                    isSecret: getSecretAttribute ? card.name.includes('secreto') : false,
                }
              })
        })
}

const findTheme = (card) => {
    if(card.labels) {
        const isDark = card.labels.some(label => label.name === 'theme-dark')
        if (isDark) return 'dark'
    }
    return 'light'
}