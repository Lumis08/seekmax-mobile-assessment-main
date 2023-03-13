# Seek MAX - Take Home Assignment

## Tasks
### Implemented Screens
* Job Listing Screen
  * Display active job ads with API integration
  * Implement navigation logic when click on active job ads
* Job Detail Screen
  * Display job ads details with API integration
  * Implement job apply logic with API integration
* Login Screen
  * Implement authentication logic with API integration
  * Display login status (success / failed) message

### Incomplete Logics
* Job Listing Screen
  * No navigation to Login screen
* Job Detail Screen
  * No navigation to Login screen
  * Job apply logic always return false due to no JWT token at request header
* Login Screen
  * Success login will not trigger navigation, only status message was shown
  * JWT token will not be stored when login successfully

## Information
### Existing Logins
```shell
user1: Seeker1123
user2: Seeker2123
user3: Seeker3123
```

### Run - App (Android)
In the `app/seekmax/` run the following commands:
```shell
npm install
npx react-native start
npx react-native run-android
```

### Run - Backend
In the `backend/graphql/` run the following commands:
```shell
npm install
npm run build
```

Second, in the `backend/rest/` also run the following commands:
```shell
npm install
npm run build
```

Lastly, back to the `backend/` run the following command:
```shell
docker-compose up -d
```
