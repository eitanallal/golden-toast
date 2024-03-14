import styles from './criminal.module.css';

type CriminalProps = {
  user: string;
};

export const Criminal = (props: CriminalProps) => {
  return (
    <div className={styles.single_criminal}>
      <div className={styles.userbox}>{props.user}</div>
    </div>
  );
};

export default Criminal;
