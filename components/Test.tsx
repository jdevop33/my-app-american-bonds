import * as React from "react";
import { SVGProps } from "react";
const Test = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={800} height={500} {...props}>
    <path fill="#fff" d="M0 0h800v500H0z" />
    <text
      x={400}
      y={50}
      fill="#2F2F2F"
      fontFamily="Arial"
      fontSize={24}
      fontWeight="bold"
      textAnchor="middle"
    >
      {
        "\r\n    Competitive Yields: Municipal Bonds vs. Other Investments\r\n  "
      }
    </text>
    <path stroke="#CCC" d="M100 100v300" />
    <text
      x={80}
      y={400}
      fill="#666"
      fontFamily="Arial"
      fontSize={14}
      textAnchor="end"
    >
      {"0%"}
    </text>
    <text
      x={80}
      y={325}
      fill="#666"
      fontFamily="Arial"
      fontSize={14}
      textAnchor="end"
    >
      {"2%"}
    </text>
    <text
      x={80}
      y={250}
      fill="#666"
      fontFamily="Arial"
      fontSize={14}
      textAnchor="end"
    >
      {"4%"}
    </text>
    <text
      x={80}
      y={175}
      fill="#666"
      fontFamily="Arial"
      fontSize={14}
      textAnchor="end"
    >
      {"6%"}
    </text>
    <text
      x={80}
      y={100}
      fill="#666"
      fontFamily="Arial"
      fontSize={14}
      textAnchor="end"
    >
      {"8%"}
    </text>
    <path
      stroke="#CCC"
      strokeDasharray="5,5"
      d="M100 400h600M100 325h600M100 250h600M100 175h600M100 100h600"
    />
    <rect width={100} height={240} x={150} y={160} fill="#00473E" rx={4} />
    <text
      x={200}
      y={420}
      fill="#2F2F2F"
      fontFamily="Arial"
      fontSize={14}
      textAnchor="middle"
    >
      {"Municipal Bonds"}
    </text>
    <text
      x={200}
      y={150}
      fill="#2F2F2F"
      fontFamily="Arial"
      fontSize={14}
      fontWeight="bold"
      textAnchor="middle"
    >
      {"7.0%"}
    </text>
    <rect width={100} height={200} x={350} y={200} fill="#2C7DC0" rx={4} />
    <text
      x={400}
      y={420}
      fill="#2F2F2F"
      fontFamily="Arial"
      fontSize={14}
      textAnchor="middle"
    >
      {"Corporate Bonds"}
    </text>
    <text
      x={400}
      y={190}
      fill="#2F2F2F"
      fontFamily="Arial"
      fontSize={14}
      fontWeight="bold"
      textAnchor="middle"
    >
      {"5.0%"}
    </text>
    <rect width={100} height={160} x={550} y={240} fill="gray" rx={4} />
    <text
      x={600}
      y={420}
      fill="#2F2F2F"
      fontFamily="Arial"
      fontSize={14}
      textAnchor="middle"
    >
      {"U.S. Treasuries"}
    </text>
    <text
      x={600}
      y={230}
      fill="#2F2F2F"
      fontFamily="Arial"
      fontSize={14}
      fontWeight="bold"
      textAnchor="middle"
    >
      {"4.0%"}
    </text>
    <text x={100} y={460} fill="#666" fontFamily="Arial" fontSize={12}>
      {
        "* Municipal bond yields shown are tax-equivalent yields for highest tax brackets"
      }
    </text>
    <text x={100} y={480} fill="#666" fontFamily="Arial" fontSize={12}>
      {"Data source: Current market rates as of January 2025"}
    </text>
  </svg>
);
export default Test;
