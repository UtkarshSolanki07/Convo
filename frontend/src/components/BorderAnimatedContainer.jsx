/**
 * Renders a full-size container that wraps its children with a rounded, animated gradient border.
 *
 * @param {Object} props - Component props.
 * @param {import('react').ReactNode} props.children - Elements to be rendered inside the animated container.
 * @returns {import('react').ReactElement} A div element spanning full width and height with a rounded, animated gradient border that contains the provided children.
 */
function BorderAnimatedContainer({ children }) {
  return (
    <div className="w-full h-full [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.cyan.500)_86%,_theme(colors.cyan.300)_90%,_theme(colors.cyan.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border border-transparent animate-border  flex overflow-hidden">
      {children}
    </div>
  );
}
export default BorderAnimatedContainer;