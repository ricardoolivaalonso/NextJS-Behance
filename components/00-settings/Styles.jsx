import { Base } from "./Base"
import { Fonts } from "./Fonts"
import { Reset } from "./Reset"
import { Variables } from "./Variables"

export const Styles = () => {
    return(
        <>
            <Variables />
            <Fonts />
            <Reset />
            <Base />
        </>
    )
}