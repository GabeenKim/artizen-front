import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie(props) {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: props.item[0], label: '영화' },
            { id: 1, value: props.item[1], label: '공연' },
            { id: 2, value: props.item[2], label: '전시' },
          ],
        },
      ]}
      width={400}
      height={200}
    />
  );
}