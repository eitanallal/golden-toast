# Database architecture

Table Users

| id       | username | name   | surname | password | isAdmin |
| -------- | -------- | ------ | ------- | -------- | ------- |
| uuid     | string   | string | string  | string   | boolean |
| prim key |          |        |         |          |         |

Table Criminal

| id       | userId      | isPersonNonGrata |
| -------- | ----------- | ---------------- |
| uuid     | uuid        | boolean          |
| prim key | foreign key |                  |

Table Toasts

| id       | userId      | date     | hasHappened |
| -------- | ----------- | -------- | ----------- |
| uuid     | uuid        | DateTime | boolean     |
| prim key | foreign key |          |             |

# Routes

## User

- POST: AddUser(string username, string name, string surname, string password, boolean admin) => boolean
- POST: EditUser(uuid id, string username, string name, string surname, string password, boolean admin) => boolean
- GET: GetUserUsername(uuid id) => string
- GET: GetUserName(uuid id) => string
- GET: GetUserSurname(uuid id) => string
- GET: CheckUserAdmin(uuid id) => boolean
- GET: CheckPassword(string username, string password) => boolean

## Toast

- POST: AddToast(uuid userId, DateTime date, boolean happened) => boolean
- POST: EditToast(uuid toastId, uuid userId, DateTime date, boolean happened) => boolean
- GET: GetGlobalPassedToasts() => ToastData[]
- GET: GetPassedToasts(uuid userId) => ToastData[]
- GET: GetGlobalFutureToasts() => ToastData[]
- GET: GetFutureToasts(uuid userId) => ToastData[]
- GET: GetNumberOfToastsHappened() => int
- GET: GetToastsRecord() => int

## Criminal

- POST: SetUserCriminal(uuid userId) => boolean
- POST: UnsetUserCriminal(uuid userId) => boolean
- POST: SetUserPersonNonGrata(uuid userId) => boolean
- POST: UnsetUserPersonNonGrata(uuid userId) => boolean
- GET: GetUserCriminalStatus(uuid userId) => boolean
- GET: GetUserPersonNonGrataStatus(uuid userId) => boolean
