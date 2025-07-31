import React from "react";
import type { ReactElement } from "react";

type SSGPageProps = {
  time: string;
};

export default function SSGPage({ time }: SSGPageProps): ReactElement {
  return (
    <div style={{ padding: 20 }}>
      <h1>SSG Page - Build Time</h1>
      <p>{time}</p>
      <p>(Ta godzina jest ustalana podczas builda i jest statyczna)</p>
    </div>
  );
}

// getStaticProps - wywoływane podczas builda
export async function getStaticProps() {
  return {
    props: {
      time: new Date().toLocaleString(),
    },
  };
}
