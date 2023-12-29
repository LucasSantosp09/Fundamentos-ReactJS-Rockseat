import styles from "./Avatar.module.css";

export function Avatar(props) {
  // eslint-disable-next-line no-unused-vars, react/prop-types
  const hasBorder = props.hasBorder !== false;

  return (
    <img
      // eslint-disable-next-line react/prop-types
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      // eslint-disable-next-line react/prop-types
      src={props.src}
    />
  );
}
