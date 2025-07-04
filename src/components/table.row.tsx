'use client';
import React, { useState } from 'react';

interface Props {
  day: string;
}

const TableRow: React.FC<Props> = () => {
  // const [checked, setChecked] = useState(false);
  const [days, setDays] = useState<string[]>([]);
  // console.log(checked);

  const daysArray = (value: boolean) => {
    // setChecked(!checked);
    console.log(value);
  };

  return <div></div>;
};

export default TableRow;
