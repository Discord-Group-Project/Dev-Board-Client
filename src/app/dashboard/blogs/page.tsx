"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

function Page() {
  const [value, setValue] = useState("");

  return (
    <>
      <h1>Add Blog</h1>
      <Editor value={value} onChange={setValue} />
    </>
  );
}

export default Page;
