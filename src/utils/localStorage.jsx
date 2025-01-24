const employees = [
    {
        "id": 1,
        "email": "employee1@gmail.com",
        "password": "employee1",
        "tasks": [
            {
                "title": "Prepare Monthly Report",
                "description": "Compile the sales data for the month and create a report.",
                "category": "Reporting",
                "date": "2025-01-25",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Update Client Database",
                "description": "Add new client information and review existing data.",
                "category": "Data Entry",
                "date": "2025-01-26",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Organize Team Meeting",
                "description": "Set up a meeting to discuss project milestones.",
                "category": "Management",
                "date": "2025-01-28",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@gmail.com",
        "password": "employee2",
        "tasks": [
            {
                "title": "Resolve Client Complaints",
                "description": "Follow up on open tickets and resolve customer complaints.",
                "category": "Customer Support",
                "date": "2025-01-27",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Prepare Presentation",
                "description": "Create a presentation for the upcoming client meeting.",
                "category": "Presentation",
                "date": "2025-01-29",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "File Paperwork",
                "description": "Organize and submit important company documents.",
                "category": "Administration",
                "date": "2025-01-24",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@gmail.com",
        "password": "employee3",
        "tasks": [
            {
                "title": "Inventory Check",
                "description": "Perform a stock check and report discrepancies.",
                "category": "Inventory",
                "date": "2025-01-25",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Training",
                "description": "Conduct training for new hires on company policies.",
                "category": "Training",
                "date": "2025-01-30",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@gmail.com",
        "password": "employee4",
        "tasks": [
            {
                "title": "System Maintenance",
                "description": "Perform routine maintenance on the office computers.",
                "category": "IT",
                "date": "2025-01-26",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Policy Review",
                "description": "Review and update company policies.",
                "category": "Management",
                "date": "2025-01-28",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@gmail.com",
        "password": "employee5",
        "tasks": [
            {
                "title": "Schedule Interviews",
                "description": "Coordinate interviews for prospective hires.",
                "category": "Recruitment",
                "date": "2025-01-25",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Budget Allocation",
                "description": "Work with finance to allocate the project budget.",
                "category": "Finance",
                "date": "2025-01-29",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@gmail.com",
        "password": "admin"
    }
];



export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(employees, admin);
}