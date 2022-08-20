// Write your solution in this file!
const employee = {};
employee.name = "sita";
employee.streetAddress = "21 Broadway";

function updateEmployeeWithKeyAndValue(){
    let newEmployee = {...employee };
    newEmployee["name"] = "Sam";
    newEmployee["streetAddress"] = "11 Broadway";
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
   employee.name = "Sam";
   employee.streetAddress = "12 Broadway";
    return employee; 
}

function deleteFromEmployeeByKey(){
    let borEmploy = {...employee};
    delete borEmploy .name;
    borEmploy.age = "33";
   borEmploy.streetAddress = "13 Broadway";
   return borEmploy;

};

function destructivelyDeleteFromEmployeeByKey(){

    delete employee.name;
    employee.age = "33";
   employee.streetAddress = "13 Broadway";
   return employee;
};
