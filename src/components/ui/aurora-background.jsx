"use client";

export default function AuroraBackground({ className = "" }) {
  return (
    <>
      <style>{`
        @keyframes aurora {
          from { background-position: 50% 50%, 50% 50%; }
          to   { background-position: 350% 50%, 350% 50%; }
        }
        .aurora-layer {
          position: absolute;
          inset: -10px;
          background-image:
            repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
            repeating-linear-gradient(100deg, #c8956a 10%, #e2be96 15%, #d4a76a 20%, #eddcc0 25%, #b8804a 30%);
          background-size: 300%, 200%;
          background-position: 50% 50%, 50% 50%;
          filter: blur(12px);
          opacity: 0.35;
          will-change: background-position;
          animation: aurora 60s linear infinite;
          mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 100% 0%, black 10%, transparent 70%);
        }
        .aurora-layer::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            repeating-linear-gradient(100deg, #fff 0%, #fff 7%, transparent 10%, transparent 12%, #fff 16%),
            repeating-linear-gradient(100deg, #c8956a 10%, #e2be96 15%, #d4a76a 20%, #eddcc0 25%, #b8804a 30%);
          background-size: 200%, 100%;
          background-attachment: fixed;
          mix-blend-mode: soft-light;
          animation: aurora 60s linear infinite;
        }
      `}</style>

      <div className={`absolute inset-0 overflow-hidden z-0 pointer-events-none ${className}`}>
        <div className="aurora-layer" />
      </div>
    </>
  );
}