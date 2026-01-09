/**
 * Render a vertical stack of six animated chat-bubble skeletons with alternating alignment.
 *
 * The component displays six placeholder chat bubbles (width-fixed, dark styling) that alternate
 * between start and end alignment and use a pulse animation to indicate loading. The component
 * accepts no props.
 * @returns {JSX.Element} A container element with the six chat-bubble skeletons.
 */
function MessagesLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className={`chat ${index % 2 === 0 ? "chat-start" : "chat-end"} animate-pulse`}
        >
          <div className={`chat-bubble bg-slate-800 text-white w-32`}></div>
        </div>
      ))}
    </div>
  );
}
export default MessagesLoadingSkeleton;