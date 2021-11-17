### 1. Setup project
- Run `yarn` or `npm install`
- Update env for json-server:
  - Run `cp .env.sample .env`
  - Update variable `REACT_APP_API_URL` to json-server host, ex: REACT_APP_API_URL=http://localhost:3000

### 2. Start json-server
- Run `yarn db` or `npm run db`

*Note: default json-server is running at port 3000, please update .env if you change the json-server port*

### 3. Start react app
- Run `yarn start` or `npm run start`
