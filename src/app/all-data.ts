export class Employee {

    _id: string;
    FirstName: string;
    LastName: string;
    AddressStreet: string;
    AddressState: string;
    AddressCity: string;
    AddressZip: number;
    PhoneNum: number;
    Extension: number;
    Position: {
        _id: string;
        PositionName: string;
        PositionDescription: string;
        PositionBaseSalary: number;
    }
    HireDate: string;
    SalaryBonus: number;
   

}

export class Project {

    _id: string;
    ProjectName: string;
    ProjectDescription: string;
    ProjectStartDate: string;
    ProjectEndDate: string;
}

export class Teams {

    _id: string;
    TeamName: string;
    TeamLead: Employee;
    Employees: Employee[];
    Projects: Project[];
}

export class Positions {
    
    Position: {
        _id: string;
        PositionName: string;
        PositionDescription: string;
        PositionBaseSalary: number;
    }
}
