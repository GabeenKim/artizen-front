import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Basicbar(props) {
  return (
    <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: ['7월', '8월', '9월'],
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: [props.item[0], props.item[1], props.item[2]],
        },
      ]}
      width={500}
      height={300}
    />
  );
}