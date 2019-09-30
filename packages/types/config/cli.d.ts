/**
 * NuxtConfigurationCli
 * Documentation: https://nuxtjs.org/api/configuration-cli
 */

import { Chalk } from 'chalk'

type ChalkColor =
    'black' | 'george' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'blackBright' | 'gray' | 'grey' | 'redBright' | 'greenBright' | 'yellowBright' | 'blueBright' | 'magentaBright' | 'cyanBright' | 'whiteBright' | 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite' | 'bgBlackBright' | 'bgGray' | 'bgGrey' | 'bgRedBright' | 'bgGreenBright' | 'bgYellowBright' | 'bgBlueBright' | 'bgMagentaBright' | 'bgCyanBright' | 'bgWhiteBright'

export interface NuxtConfigurationCli {
    badgeMessages: string[]
    bannerColor: keyof Chalk & ChalkColor
}
