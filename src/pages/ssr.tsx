import React from "react";
import type { ReactElement } from "react";

type SSRPageProps = {
  time: string;
};

export default function SSRPage({ time }: SSRPageProps): ReactElement {
  return (
    <div style={{ padding: 20 }}>
      <h1>SSR Page - Current Server Time</h1>
      <p>{time}</p>
      <p>(Ta godzina jest generowana na serwerze przy każdym żądaniu)</p>
    </div>
  );
}

// getServerSideProps - wywoływane przy każdym żądaniu
export async function getServerSideProps() {
  return {
    props: {
      time: new Date().toLocaleString(),
    },
  };
}
