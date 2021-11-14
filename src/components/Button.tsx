import Tooltip from "@mui/material/Tooltip";

type ButtonProps = {
  ariaLabel?: string;
  children: any;
  colors?: any;
  onClick: () => void;
  tooltipText?: string;
  variant?: "primary" | "secondary";
};

const Button = ({
  ariaLabel,
  children,
  colors,
  onClick,
  tooltipText,
  variant,
  ...rest
}: ButtonProps): JSX.Element => {
  const style =
    variant === "primary"
      ? {
          backgroundColor: colors?.lightVibrant,
          color: colors?.darkMuted,
        }
      : {
          borderColor: colors?.lightVibrant,
          color: colors?.lightVibrant,
        };

  const button = (
    <button
      aria-label={ariaLabel}
      className={`button ${variant === "primary" ? "button-primary" : null}`}
      onClick={onClick}
      style={style}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );

  if (!tooltipText) return button;
  return (
    <Tooltip open={!!tooltipText} title={tooltipText} arrow placement="top">
      {button}
    </Tooltip>
  );
};

export default Button;
