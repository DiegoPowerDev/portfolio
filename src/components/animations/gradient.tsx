export default function MeshGradient() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <div className="absolute -top-40 -left-32 w-[560px] h-[560px] rounded-full bg-lime-300/20 blur-[130px] animate-mesh-drift-1" />
      <div className="absolute top-1/3 -right-40 w-[520px] h-[520px] rounded-full bg-lime-400/30 blur-[140px] animate-mesh-drift-2" />
    </div>
  );
}
