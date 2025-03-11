import React from 'react'
import { styled } from "@mui/system";

const Root = styled("div")({
    backgroundColor: "blue",
    minHeight: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: "20px 0"
  });

export default function NotFound() {
  return (
    <Root><p>404. This has not been found</p></Root>
  )
}
