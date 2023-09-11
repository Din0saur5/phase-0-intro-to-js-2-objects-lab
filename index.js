// Write your solution in this file!
const employee = {
    name: "employeeName",
    streetAddress: "employeeAddress",

};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const employeeNew = {...employee};
    employeeNew[key] = value;
    return employeeNew;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key] = value;
    return employee;

}