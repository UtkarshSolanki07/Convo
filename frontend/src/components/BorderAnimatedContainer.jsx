/**
 * Render a stylized container with an animated gradient border that wraps its children.
 *
 * The container fills available width and height, clips overflow, and applies rounded corners
 * and a decorative animated border using layered gradients.
 *
 * @param {object} props
 * @param {import('react').ReactNode} props.children - Content to render inside the container.
 * @returns {import('react').JSX.Element} The container element with the animated border and children.
 */
function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,theme(colors.zinc.900),theme(colors.zinc.800)_50%,theme(colors.zinc.900))_padding-box,conic-gradient(from_var(--border-angle),theme(colors.zinc.700/.48)_80%,_theme(colors.violet.500)_86%,_theme(colors.violet.300)_90%,_theme(colors.violet.500)_94%,_theme(colors.zinc.700/.48))_border-box] rounded-2xl border border-transparent animate-border  flex overflow-hidden">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;