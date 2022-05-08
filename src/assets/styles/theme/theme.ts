export const theme = {
	palette: {
		primary1: '#add7f6',
		primary2: '#87bfff',
		primary3: '#3f8efc',
		primary4: '#2667ff',
		primary5: '#3b28cc',

		grey1: '#f0f4f8',
		grey2: '#d9e2ec',
		grey3: '#bcccdc',
		grey4: '#9fb3c8',
		grey5: '#829ab1',
		grey6: '#627d98',
		grey7: '#486581',
		grey8: '#334e68',
		grey9: '#243b53',
		grey10: '#102a43',

		black: '#222',
		white: '#fff',
		redLight: '#f8d7da',
		redDark: '#842029',
		greenLight: '#d1e7dd',
		greenDark: '#0f5132',
		statusYellow: '#fcefc7',
		statusBlue: '#647acb',
		statusRed: '#ffeeee',
		tomato:'tomato'
	},
	shadow: {
		shadow1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
		shadow2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		shadow3: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		shadow4: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
	},
	width: {
		maxWidth: '1120px',
		fixedWidth: '500px',
		fluidWidth: '90vw',
	},
	breakPoint: {
		breakpointLg: '992px',
	},
	nav: {
		navHeight: '6rem',
	},
	border: {
		borderRadius: '0.25rem',
	},
	font: {
		smallText: '0.875rem',
		extraSmallText: '0.7em',
		letterSpacing: '1px',
	},
	breakpoints: {
		breakpointLg: '992px',
	},

}

export type Theme = typeof theme
