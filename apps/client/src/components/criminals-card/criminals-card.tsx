import { useGetCriminalsQuery } from '../../store/services/criminals.api';
import { CriminalType } from '../../types/criminal.types';
import Card from '../card/card';
import Criminal from '../criminal/criminal';
import styles from './criminals-card.module.css';

export const CriminalsCard: React.FC = () => {
  const { data: criminals } = useGetCriminalsQuery();
  return (
    <Card>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>עבריינים</div>
        <div className={styles.criminalsContent}>
          {criminals === undefined ? (
            <p> No criminal found </p>
          ) : (
            criminals.map((item: CriminalType) => (
              <Criminal
                user={item.user.firstName + ' ' + item.user.lastName}
                isPersonNonGrata={item.isPersonNonGrata}
              />
            ))
          )}{' '}
        </div>
      </div>
    </Card>
  );
};

export default CriminalsCard;
