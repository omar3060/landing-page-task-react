import styles from "./AvatarRound.module.css";
function AvatarRound({ avatar }) {
  return (
    <>
      <div className={`${styles["image-wrapper"]}`}>
        <img src={avatar} alt="avatar-1" />
      </div>
    </>
  );
}

export default AvatarRound;
