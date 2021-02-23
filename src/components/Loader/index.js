export const Loader = ({ align = "left", color = "info" }) => {
  return (
    <div className={`text-${align}`}>
      <div className={`spinner-border text-${color}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
