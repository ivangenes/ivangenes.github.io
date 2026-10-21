export function SocialPreview() {
  return (
    <div
      style={{
        alignItems: "stretch",
        background: "#e7e7e4",
        color: "#101112",
        display: "flex",
        fontFamily: "Arial, Helvetica, sans-serif",
        height: "100%",
        padding: "34px",
        width: "100%",
      }}
    >
      <div
        style={{
          alignItems: "stretch",
          background: "#f7f7f4",
          border: "1px solid #b9b9b4",
          display: "flex",
          flex: 1,
          position: "relative",
        }}
      >
        <div
          style={{
            background:
              "radial-gradient(circle at 50% 42%, #ffffff 0%, #c9c9c5 36%, #777873 62%, #191a1b 100%)",
            border: "1px solid #8d8e89",
            borderRadius: "50%",
            display: "flex",
            height: "410px",
            position: "absolute",
            right: "78px",
            top: "74px",
            width: "410px",
          }}
        />
        <div
          style={{
            background: "#101112",
            display: "flex",
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "12px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "56px 60px 52px 64px",
            position: "relative",
            width: "760px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            Portfolio · 2026
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: "82px",
                fontWeight: 700,
                letterSpacing: "-0.065em",
                lineHeight: 0.92,
              }}
            >
              Ivan Genes
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "28px",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                marginTop: "24px",
              }}
            >
              Senior Software Engineer
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              letterSpacing: "0.055em",
              textTransform: "uppercase",
            }}
          >
            Backend Architecture · Distributed Systems · Full-Stack
          </div>
        </div>
      </div>
    </div>
  );
}
