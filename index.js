// Write your solution in this file!
const employee = {
    name: "employeeName",
    streetAddress: "employeeAddress",

};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value,};
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;

}
function deleteFromEmployeeByKey(employee, key){
    

}