import { CriminalType } from '../../types/criminal.types';
import styles from './criminals-card.module.css';
import { Card, Criminal } from '../';
import { useGetCriminalsQuery } from '../../store';

export const CriminalsCard: React.FC = () => {
  const { data: criminals } = useGetCriminalsQuery();

  return (
    <Card width="22%">
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>עבריינים</div>
        <div className={styles.criminalsContent}>
          {!criminals || criminals.length === 0 ? (
            <p> No criminal found </p>
          ) : (
            criminals.map((item: CriminalType, index: number) => (
              <Criminal
                key={index}
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
