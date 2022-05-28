// import React from 'react'
// import {SparklineComponent, Inject, SparklineTooltip} from "@syncfusion/ej2-react-charts"

// function SparkLine({id, height, width, color, data, type, currentColor}) {
//   console.log("data")
//   console.log(data)
//   return (
//     <SparklineComponent 
//       id={id}
//       height={height} 
//       width={width} 
//       dataSource={data} 
//       xName='x' 
//       yName='y'
//       border={{color: currentColor, width: 2}}
//       valueType="Numeric"
//       fill={color}
//       type={type}
//       tooltipSettings={{
//         visible: true,
//         format: "${x} : data ${y}",
//         trackLineSettings: {
//           visible: true
//         }
//       }}
//     >
    
//     </SparklineComponent>
//     // <SparklineComponent
//     //     id="sparkline"
//     //     height="300px"
//     //     width="200px"
//     //     // lineWidth={1}
//     //     // valueType="Numeric"
//     //     // fill={color}
//     //     // border={{color: currentColor, width: 2}}
//     //     dataSource={data}
//     //     xName="x"
//     //     yName="y"
//         // type={type}
//         // tooltipSettings={{
//         //   visible: true,
//         //   format: "${x} : data ${y}",
//         //   trackLineSettings: {
//         //     visible: true
//         //   }
//         // }}
//     //     // <Inject services={[SparklineTooltip]} />
//     //     >
//     // </SparklineComponent>
//   )
// }



// export default SparkLine

import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          // eslint-disable-next-line no-template-curly-in-string
          format: '${x} : data ${yval}',
          trackLineSettings: {
            visible: true,
          },
        }}
        markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;