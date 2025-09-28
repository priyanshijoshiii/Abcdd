// src/components/RadialGradient.jsx
function RadialGradient() {
  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none aboslute -left-1/2 -top-1/2 
        h-[120vh] w-[120vh] sm:h-[170vh] sm:w-[170vh] md:h-[225vh] md:w-[215vh]
        rounded-full  
        blur              
        opacity-100         
        bg-[radial-gradient(ellipse_at_center,_rgba(260,211,252,0.8)_0%,_rgba(80,200,252,0.4)_50%,_rgba(125,211,252,0.4)_100%)]
      "
    />
  );
}
export default RadialGradient   