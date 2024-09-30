
const  breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
};

const fontWeights ={
  regular:500,
  semiBold:600
}

const baseTheme = {
    breakpoints,
    fontWeights,
    containerMaxWidth:'1200px'
}

const lightTheme = {
   ...baseTheme,
    primary:"#5E56E7",
    secondary:"#F8F7FF",
    grey100:"#F0F0F6",
    grey500:"#A0A0A0",
    grey900:"#333333",
    background:"#F7F6FE",
    
}

const darkTheme = {
   ...baseTheme,
    primary:"#5E56E7",
    secondary:"#F8F7FF",
    grey100:" #F0F0F6",
    grey500:" #A0A0A0",
    grey900:"#333333",
    background:"#FEFEFE"
}

const themes = {light:lightTheme , dark:darkTheme}

export default themes;