import Card from '../card/card';
import Criminal from '../criminal/criminal';
import styles from './criminals-card.module.css';

export const CriminalsCard: React.FC = () => {
  return (
    <Card>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>עבריינים</div>
        <div className={styles.criminalsContent}>
          <Criminal user="Tomer Steinberg" isPersonNonGrata={true}></Criminal>
          <Criminal user="Nadav Ben Ami" isPersonNonGrata={false}></Criminal>
          <Criminal user="Yahalom Postol" isPersonNonGrata={false}></Criminal>
          <Criminal user="Tomer Steinberg" isPersonNonGrata={true}></Criminal>
          <Criminal user="Nadav Ben Ami" isPersonNonGrata={false}></Criminal>
          <Criminal user="Yahalom Postol" isPersonNonGrata={false}></Criminal>
          <Criminal user="Tomer Steinberg" isPersonNonGrata={true}></Criminal>
          <Criminal user="Nadav Ben Ami" isPersonNonGrata={false}></Criminal>
          <Criminal user="Yahalom Postol" isPersonNonGrata={false}></Criminal>
        </div>
      </div>
    </Card>
  );
};

export default CriminalsCard;
