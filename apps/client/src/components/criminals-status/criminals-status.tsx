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
  console.log(users);

  const handleAddDeleteCriminal = (userId: string, isCriminals: boolean) => {
    if (isCriminals) {
      console.log(`DELETE A CRIMINAL: ${userId}`);
      deleteCriminal({ id: userId });
    } else {
      console.log(`CREATE A CRIMINAL: ${userId}`);
      addCriminal({ userId: userId, isPersonNonGrata: false });
    }
  };

  const handleEditPersonNonGrata = (
    userId: string,
    isPersonNonGrata: boolean
  ) => {
    if (isPersonNonGrata) {
      console.log(`SET AS CRIMINAL ONLY: ${userId}`);
      editCriminal({ id: userId, isPersonNonGrata: false });
    } else {
      console.log(`SET AS PERSON NON GRATA: ${userId}`);
      editCriminal({ id: userId, isPersonNonGrata: true });
    }
  };

  return (
    <table className={styles.table}>
      <tr>
        <th> שם משתצש </th>
        <th> עבריין </th>
        <th> פרסונה נון גרטה </th>
      </tr>
      {!users ? (
        <div> No user found </div>
      ) : (
        users.map((user, index) => (
          <tr key={index}>
            <td>{user.username}</td>
            <td>
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
            <td>
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
      <div></div>
    </table>
  );
};

export default CriminalsStatus;
