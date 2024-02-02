import {View} from "react-native"

import Svg, { Circle, Rect } from 'react-native-svg';
function Slider()  {

return(

    <View>

<View styl={{position: "absolute",
          left: "338px",
          top: "0px",
          width: "37px",
          height: "668px",
          overflowX: "visible",
          overflowY: "visible",}}>
              <Svg height="100" width="100">
        <Circle cx="50%" cy="50%" r="40%" fill="red" />
      </Svg>

{/* <Svg
          preserveAspectRatio="none"
          viewBox="0 0 37 668"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9031 668L30.9031 562.03
            1C30.9031 551.645 27.5642 541.533 21.3791 533.189V533.189C8.68053 516.058 8.68053 492.637 21.3791 475.506V475.506C27.5642 467.162 30.9031 457.051 30.9031 446.665L30.9031 1.35082e-06L37 1.61732e-06L37 668L30.9031 668Z"
            fill="#3D7A72"
          />
        </Svg> */}
<View
        style={{
          position: "absolute",
          left: "358.824px",
          width: "10/3529px",
          backgroundColor: "white",
        }}
      ></View>

</View>

{/* <div
        style={{
          position: "absolute",
          left: "338px",
          top: "0px",
          width: "37px",
          height: "668px",
          overflowX: "visible",
          overflowY: "visible",
        }}
      >
        
      </div> */}
    

    </View>
)

}

export default Slider