import React, { useState, useEffect } from "react";

function useStats(params) {
  const [stats, setStats] = useState();

  useEffect(async () => {
    console.log("fetching data");
    fetch("https://covid19.mathdro.id/api").then((data) => data.json());
  }, []);
}

export default function IndexPage() {
  return <p>Hello from pages/index</p>;
}
