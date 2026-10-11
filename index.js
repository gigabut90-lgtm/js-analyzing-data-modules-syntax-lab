require('datejs');
function combineUsers(...arg){
  const combinedObject ={
    users : [],
    merge_date : Date.today().toString("M/d/yyyy")
  }
  for (const user of arg){
    combinedObject.users = [
      ...combinedObject.users,
      ...user
    ]

  }
  return combinedObject


}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};