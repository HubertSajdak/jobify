import { Theme } from '../assets/styles/theme/theme'

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {}
}
