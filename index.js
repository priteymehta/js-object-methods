// Import stylesheets
import './style.css';

// -------------------------------------------------
// 1. Freeze() method
// -------------------------------------------------
var data = {
  name: 'pritey',
  email: 'pritey@user.com',
};

Object.freeze(data);
// it will not update the properties.
// throws an error
//data.email = 'pritey1@user.com';
//console.log(data);

// -------------------------------------------------
// 1. keys() method
// -------------------------------------------------

//console.log(Object.keys(data));

// -------------------------------------------------
// 2. values() method
// -------------------------------------------------

//console.log(Object.values(data));

// -------------------------------------------------
// 3. assign() method
// -------------------------------------------------

var targetObject = {
  name: 'pritey',
  email: 'pritey@user.com',
};

var sourceObject = {
  phone: '12345',
};

Object.assign(targetObject, sourceObject);
console.log('targetObject', targetObject);
console.log('sourceObject', sourceObject);
