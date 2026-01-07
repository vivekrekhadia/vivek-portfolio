import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 100,
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ededed",
          borderRadius: "32px",
          fontWeight: 800,
          fontFamily: "sans-serif",
        }}
      >
        VR
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
