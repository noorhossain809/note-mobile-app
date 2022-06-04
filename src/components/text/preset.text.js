import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
    fontFamily: typography.primary,
    fontSize: 16,
    color: colors.white
}

const BASE_BOLD = {
    fontFamily: typography.primaryBold,
    fontSize: 16,
    color: colors.white
}


export const presets = {
    default: BASE,
    bold: BASE,
    h1:{
        ...BASE,
        fontSize: 32
    },
    h2:{
        ...BASE,
        fontSize: 28

    },
    h3:{
        ...BASE_BOLD,
        fontSize: 24
    },
    h4:{
        ...BASE_BOLD,
        fontSize: 16
    },
    h5:{
        ...BASE_BOLD,
        fontSize: 20
    },
}