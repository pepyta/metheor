import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width="1em"
      height="1em"
      {...props}
    >
      <Path
        d="M196.423 21.53c-.811 1.941-25.318 43.092-54.46 91.447-29.142 48.354-53.228 88.551-53.526 89.327-.387 1.009 15.445 10.858 55.514 34.534l56.057 33.122 56.041-33.14c40.261-23.809 55.888-33.541 55.497-34.561C309.521 196.981 200.545 18 199.356 18c-.802 0-2.122 1.588-2.933 3.53M88.57 226.125C90.73 229.818 199.545 382.92 200 382.906c.752-.023 112.004-157.235 111.574-157.666-.406-.405-104.395 60.841-108.733 64.04l-2.659 1.962-53.841-31.788c-29.613-17.483-54.935-32.493-56.271-33.354-2.215-1.427-2.348-1.425-1.5.025"
        fillRule="evenodd"
      />
    </Svg>
  )
}

const EtehereumIcon = React.memo(SvgComponent)
export default EtehereumIcon;
