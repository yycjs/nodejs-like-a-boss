/* GET users listing. */
exports.list = function(req, res){
  var fakeUsers = [
    {
      id: 1,
      name: 'Hulk Hogan'
    },
    {
      id: 2,
      name: 'Randy Savage'
    }
  ];

  res.json(fakeUsers);
};
