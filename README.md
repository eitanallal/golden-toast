# System requirements

- Creation of user/login
- Creation of an admin, with privilege features
- creation of a main screen:

  - past/upcoming drinks. shows personnal past drinks and future drinks of everyone
  - leaderboards
  - clock
  - criminals menu

- user actions:

  - add, edit, remove personnal drinks
  - edit user information
  - display drinks history

- admin actions:

  - set or unset user as criminal/persona non grata
  - add, edit, remove toasts for all users
  - set user as admin
  - set a toast as criminal: toast that was supposed to happen and didn't
  - as a toast happens, hasHappened is "null". When the date of the toast has happened, a window pops up at the admin page: he has to classify all the toasts that hasn't been done yet:
    - true : the toast happened
    - false : the toast hasn't happened -> the user becomes automatically a criminal.

- reset the leaderboard at each period, and change the record
- automatically set a user as a criminal when one of his toasts hasn't taken place

## Leaderboard

- Two periods a year:
  - 01/01 to 30/06
  - 01/07 to 31/12
- user score = total number of toasts that were not illegal
- Show total number of toasts done so far and all time record. update possible only on 30/06 and 31/12

## Security

- Password security: minimal length, special caracters etc
- Password must be checked
- BONUS: autologin

## Architecture

- TRKQuery
- Server side written in Nestis and Sequlize used as an ORM
- End of project: use of docker and Jenkins on MAMDAS

- Use class validator in the dtos
- cursor: pointer in buttons
- add hovering/shaddows to buttons
