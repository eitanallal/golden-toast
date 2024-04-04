import { Switch } from '@mui/material';
import {
  useAddCriminalMutation,
  useDeleteCriminalMutation,
  useEditCriminalMutation,
  useGetAllUsersStatusQuery,
} from '../../store';
import styles from './criminals-status.module.css';

export const CriminalsStatus: React.FC = () => {
  const { data: users } = useGetAllUsersStatusQuery();
  const [addCriminal, resultAdd] = useAddCriminalMutation();
  const [editCriminal, resultEdit] = useEditCriminalMutation();
  const [deleteCriminal, resultDelete] = useDeleteCriminalMutation();

  /* user.status can have three different values:
    - null: the user is not a criminal
    - false: the user is a criminal
    - true: the user is a person non grata
  */
  const handleAddDeleteCriminal = (userId: string, isCriminals: boolean) => {
    if (isCriminals) {
      deleteCriminal({ id: userId });
    } else {
      addCriminal({ userId: userId, isPersonNonGrata: false });
    }
  };

  const handleEditPersonNonGrata = (
    userId: string,
    isPersonNonGrata: boolean
  ) => {
    if (isPersonNonGrata) {
      editCriminal({ id: userId, isPersonNonGrata: false });
    } else {
      editCriminal({ id: userId, isPersonNonGrata: true });
    }
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th style={{ fontSize: '1.2rem', width: '4rem' }}> שם משתצש </th>
          <th style={{ fontSize: '1.2rem', width: '6rem' }}> עבריין </th>
          <th style={{ fontSize: '1.2rem', width: '8rem' }}>פרסונה נון גרטה</th>
        </tr>
      </thead>
      <tbody>
        {!users ? (
          <tr>
            <td> No user found </td>
          </tr>
        ) : (
          users.map((user, index) => (
            <tr key={index}>
              <td style={{ textAlign: 'center' }}>{user.username}</td>
              <td style={{ textAlign: 'center', alignContent: 'center' }}>
                <Switch
                  checked={user.status === false || user.status === true}
                  onChange={(event) => {
                    handleAddDeleteCriminal(
                      user.id,
                      user.status === false || user.status === true
                    );
                  }}
                  color="warning"
                />
              </td>
              <td style={{ textAlign: 'center', alignContent: 'center' }}>
                <Switch
                  checked={user.status === true}
                  onChange={(event) => {
                    handleEditPersonNonGrata(user.id, user.status === true);
                  }}
                  disabled={user.status !== false && user.status !== true}
                  color="error"
                />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default CriminalsStatus;
