import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Progress(data) {
  console.log(data.data);
  var sum = 0;
  for (var i = 0; i < data.data.length; i++) {
    // console.log(data[i]);
    sum += data.data[i]
  }
  return (
    <>
      <Title>Progress</Title>
      <Typography component="p" sx={{ fontSize: '1.5rem' }}>
        + {' ' + sum + ' calories'}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View details
        </Link>
      </div>
    </ >
  );
}
