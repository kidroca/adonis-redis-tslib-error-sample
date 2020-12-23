# Error reproduction example

All the steps are already performed and the `build` folder committed so you can
just go inside and try 

```
npm ci --production
node server.js
```

### Steps to recreate

Build the app
```
npm run build
```

Setup env variables or copy the `.env` file to `./build`

Move the `./build` folder somewhere so that it does not resolve anything from 
the parent `node_modules` folder

Go inside the `build` folder

```
npm ci --production
export NODE_ENV=production
node server.js
```

Observe error

```
Error: Cannot find module 'tslib'
Require stack:
- /app/node_modules/@adonisjs/redis/build/src/RedisConnection/index.js
- /app/node_modules/@adonisjs/redis/build/src/RedisManager/index.js
- /app/node_modules/@adonisjs/redis/build/providers/RedisProvider.js
- /app/node_modules/@poppinss/utils/build/src/esmRequire.js
- /app/node_modules/@poppinss/utils/build/index.js
- /app/node_modules/@adonisjs/fold/build/src/Ioc/index.js
- /app/node_modules/@adonisjs/fold/build/index.js
- /app/node_modules/@adonisjs/application/build/index.js
- /app/node_modules/@adonisjs/core/build/standalone.js
- /app/server.js
at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
at Function.Module._load (internal/modules/cjs/loader.js:725:27)
at Module.require (internal/modules/cjs/loader.js:952:19)
at require (internal/modules/cjs/helpers.js:88:18)
at Object.<anonymous> (/app/node_modules/@adonisjs/redis/build/src/RedisConnection/index.js:12:17)
at Module._compile (internal/modules/cjs/loader.js:1063:30)
at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
at Module.load (internal/modules/cjs/loader.js:928:32)
at Function.Module._load (internal/modules/cjs/loader.js:769:14)
at Module.require (internal/modules/cjs/loader.js:952:19)
```