import Typography from "typography"
import usWebDesignStandardsTheme from "typography-theme-us-web-design-standards"

const typography = new Typography(usWebDesignStandardsTheme)

usWebDesignStandardsTheme.overrideStyles = () => ({
  "h1, h2, h3, h4, h5, h6": {
    fontFamily: "Times New Roman",
  },
})

export const { scale, rhythm, options } = typography
export default typography
