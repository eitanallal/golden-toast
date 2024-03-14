import styles from './criminal.module.css';

type CriminalProps = {
  user: string;
  isPersonNonGrata: boolean;
};

export const Criminal = (props: CriminalProps) => {
  let criminal_style;
  if (props.isPersonNonGrata) {
    criminal_style = styles.single_personNonGrata;
  } else {
    criminal_style = styles.single_criminal;
  }

  return (
    <div className={styles.criminals_column}>
      <div className={criminal_style}>
        <div className={styles.userbox}>{props.user}</div>
      </div>
    </div>
  );
};

export default Criminal;
