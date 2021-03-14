const url = "http://172.105.63.46:5000";
export { url };

const Test1 = function (props) {
  return <h1>Test1</h1>;
};

export default Test1;
// db.createUser({user:"admin",pwd:"password",roles:["userAdminAnyDatabase","readWriteAnyDatabase" ]})
//db.createUser({user:"admin",pwd:"password",roles:["read","readWriteAnyDatabase" ]})
//db.createUser({user:"harsh",pwd:"password",roles:["readWrite","dbAdmin"]});
//db.auth("admin","password" )