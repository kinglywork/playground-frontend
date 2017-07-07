module.exports = {
  path: '/',
  name: 'home',
  component: require('./components/App').default,
  getChildRoutes(location, cb){
    require.ensure([], (require) => {
      if (module.hot){
        module.hot.accept([
          './routes/Page1',
          './routes/Page2'
        ], () => {
          cb(null, [
            require('./routes/Page1'),
            require('./routes/Page2')
          ]);
        });
      }

      cb(null, [
        require('./routes/Page1'),
        require('./routes/Page2')
      ]);
    });
  }
};
