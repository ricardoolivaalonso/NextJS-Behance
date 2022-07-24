import { v4 as uuidv4 } from 'uuid'

export const header = {
    menu: [
        {
            id: uuidv4(),
            title: "Descubrir",
            auth: true,
            url: '/explore'
        },
        // {
        //     id: uuidv4(),
        //     title: "Para ti",
        //     auth: true
        // },
        // {
        //     id: uuidv4(),
        //     title: "Transmisiones en directo",
        //     auth: true
        // },
        // {
        //     id: uuidv4(),
        //     title: "Vacantes",
        //     auth: true
        // }
    ],
    auth: [
        {
            id: uuidv4(),
            title: 'Iniciar Sesión',
            type: 'button'
        },
        {
            id: uuidv4(),
            title: 'Cerrar Sesión',
            type: 'cta'
        }
    ],
}