import * as iconData from "./svg-data";

type iconProps = {
  id: string;
  dataTestId?: string;
  color: string;
  height: string;
  width: string;
  name: string;
  strikeThrough: boolean;
};

/** Constants **/
const VIEWBOX_DEFAULT = 40;

/** Icon Component **/
const Icon = (props: iconProps) => {
  const { id, color } = props;
  const sizeStyle = {
    height: props.height,
    width: props.width,
  };

  const getSvg = (name: string) => {
    const icon = iconData.iconsByName(name);
    const strikeThroughIcon = props.strikeThrough
      ? iconData.iconsByName("strike_through")
      : null;

    if (icon !== undefined) {
      const viewHeight =
        icon && "viewHeight" in icon ? icon.viewHeight : VIEWBOX_DEFAULT;
      const viewWidth =
        icon && "viewWidth" in icon ? icon.viewWidth : VIEWBOX_DEFAULT;

      const embedColor = icon && "pathColors" in icon;

      return (
        <svg
          width={viewWidth}
          height={viewHeight}
          viewBox={`0 0 ${viewWidth} ${viewHeight}`}
          version="1.1"
          aria-hidden
          fill="currentColor"
          focusable={false}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" strokeWidth="1" fillRule="evenodd">
            {icon.paths.map((path, index) => (
              <path
                key={index}
                d={path}
                fill={
                  color.length
                    ? color
                    : embedColor
                    ? icon.pathColors[index]
                    : "inherit"
                }
              />
            ))}
            {strikeThroughIcon && (
              <path
                d={strikeThroughIcon.paths[0]}
                fill={strikeThroughIcon.pathColors[0]}
              />
            )}
          </g>
        </svg>
      );
    } else {
      return (
        <div
          style={{
            textAlign: "center",
            fontSize: "200%",
          }}
        >
          ?
        </div>
      );
    }
  };

  return (
    <div {...(id && { id })} className="icon" data-testid={props.dataTestId}>
      <div style={sizeStyle} className={`svg_wrapper`}>
        {getSvg(props.name)}
      </div>
    </div>
  );
};

export default Icon;

Icon.defaultProps = {
  name: "",
  height: "",
  width: "",
  color: "",
  id: "",
  strikeThrough: false,
  dataTestId: undefined,
};
