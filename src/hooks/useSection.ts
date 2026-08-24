"use client";

import { useState } from "react";

export default function useSection() {
  const [section, setSection] = useState("#about");

  return { section, setSection };
}
