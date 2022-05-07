import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*,::after,::before{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html{
    font-size:100%;
}

:root {
    --primary-50: #add7f6;
    --primary-100: #87bfff;
    --primary-200: #3f8efc;
    --primary-300: #2667ff;
    --primary-400: #3b28cc;

    	/* grey */
	--grey-50: #f0f4f8;
	--grey-100: #d9e2ec;
	--grey-200: #bcccdc;
	--grey-300: #9fb3c8;
	--grey-400: #829ab1;
	--grey-500: #627d98;
	--grey-600: #486581;
	--grey-700: #334e68;
	--grey-800: #243b53;
	--grey-900: #102a43;
    /* rest of the colors */
	--black: #222;
	--white: #fff;
	--red-light: #f8d7da;
	--red-dark: #842029;
	--green-light: #d1e7dd;
	--green-dark: #0f5132;
//fonts 
	--headingFont: 'Roboto Condensed', Sans-Serif;
	--bodyFont: 'Cabin', Sans-Serif;
	--small-text: 0.875rem;
	--extra-small-text: 0.7em;

    /* rest of the vars  */
    --backgroundColor: var(--grey-50);
	--textColor: var(--grey-900);
	--borderRadius: 0.25rem;
	--letterSpacing: 1px;
	--transition: 0.3s ease-in-out all;
	--max-width: 1120px;
	--fixed-width: 500px;
	--fluid-width: 90vw;
	--breakpoint-lg: 992px;
	--nav-height: 6rem;
    
    /* box shadow */
    --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
	--shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	--shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
	--shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

body {
	background:var(--backgroundColor);
	font-family: var(--bodyFont);
	font-weight: 400;
	line-height: 1.75;
	color: var(--textColor);
}


p {
	margin-bottom: 1.5rem;
	max-width: 40em;
}

h1,
h2,
h3,
h4,
h5 {
	margin-bottom: 1.38rem;
	font-family: var(--headingFont);
	font-weight: 400;
	line-height: 1.3;
	text-transform: capitalize;
	letter-spacing: var(--letterSpacing);
}

h1 {
	margin-top: 0;
	font-size: 3.052rem;
}

h2 {
	font-size: 2.441rem;
}

h3 {
	font-size: 1.953rem;
}

h4 {
	font-size: 1.563rem;
}

h5 {
	font-size: 1.25rem;
}

a {
	text-decoration: none;
}

button:disabled {
	cursor: not-allowed;
}
ul {
	list-style-type: none;
}

.img {
	width: 100%;
	display: block;
	object-fit: cover;
}

.btn {
	cursor: pointer;
	color: var(--white);
	background: var(--primary-200);
	border: transparent;
	border-radius: var(--borderRadius);
	letter-spacing: var(--letterSpacing);
	padding: 0.375rem 0.75rem;
	box-shadow: var(--shadow-2);
	transition: var(--transition);
	text-transform: capitalize;
	display: inline-block;
}

.btn:hover {
	background: var(--primary-300);
	box-shadow: var(--shadow-3);
}
.btn-hipster {
	color: var(--primary-500);
	background: var(--primary-200);
}
.btn-hipster:hover {
	color: var(--primary-200);
	background: var(--primary-700);
}
.btn-block {
	width: 100%;
}
.full-page {
	min-height: 100vh;

}
.form-input, .form-select {
	height: 35px;
	border-radius:var(--borderRadius);
	border: 1px solid var(--grey-200);
	background: var(--backgroundColor);
	padding: 0.375rem 0.75rem;
}
.Toastify__toast {
	text-transform: capitalize;
}
`
