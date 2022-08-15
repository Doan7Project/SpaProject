import * as React from 'react';
import HeaderConponent from './src/conponents/header';

export interface  BlogPageProps {
}

export default function BlogPage (props:  BlogPageProps) {
  return (
    <div>
        <HeaderConponent/>
      <span>BlogPage</span>
    </div>
  );
}
