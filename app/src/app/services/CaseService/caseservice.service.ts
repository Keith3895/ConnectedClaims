/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
import { Injectable } from '@angular/core';

@Injectable()
export class caseserviceService {

    getCaseList() {
        return caseList;
    }

    getUnattendCaseList() {
        return caseList;
    }
}

export let caseList = [
    {
        "case": {
            "agentName": "Agent Keith",
            "caseId": 123123,
            "customerName": "John",
            "policyNumber": 234234,
            "detectedBy": "",
            "incidentLocation": "Paulshof",
            "incidentTime": "Mon Dec 18 2017 01:13:01 GMT+0530 (IST)",
            "assignedUser": "Paul",
            "priority": "low",
            "createdTime": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "lastModified": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "incidentType": "accident",
            "customer": {
                "customerName": "Paul",
                "policyNumber": "1513539827172",
                "policyExpiryDate": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "dob": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "contactNumber": "1234567890",
                "customerAddress": "1 Estelle Rd, Pauslhof, Johannesburg, 2056",
                "insuredVehicleDetails": {
                    "brand": "Ford",
                    "make": "Punto"
                }
            }
        },
        "services": [
            {
                "serviceType": "ambulance",
                "details": {
                    "status": "requested",
                    "name": "Ambulance",
                    "serviceProviderName": "De Ye Wala",
                    "companyName": "De Ye",
                    "contact": "1234567890"
                },
                "comments": []
            },
            {
                "serviceType": "towing",
                "details": {
                    "status": "transit",
                    "name": "Towing",
                    "serviceProviderName": "Ana Wala",
                    "companyName": "Ana",
                    "contact": "1234567890"
                }
            },
            {
                "serviceType": "roadside assist",
                "details": {
                    "status": "complete",
                    "name": "RoadSide Assist",
                    "serviceProviderName": "Ana Wala",
                    "companyName": "Ana",
                    "contact": "1234567890"
                }
            },
            {
                "serviceType": "taxi",
                "details": {
                    "status": "transit",
                    "name": "Taxi",
                    "serviceProviderName": "Ana Wala",
                    "companyName": "Ana",
                    "contact": "1234567890"
                }
            },
            {
                "serviceType": "car hire",
                "details": {
                    "status": "pickup",
                    "name": "Car Hire",
                    "serviceProviderName": "Ana Wala",
                    "companyName": "Ana",
                    "contact": "1234567890"
                }
            }
        ],
        "selected": false
    },
    {
        "case": {
            "agentName": "Agent Sonu",
            "caseId": 123123,
            "customerName": "John",
            "policyNumber": 234234,
            "detectedBy": "",
            "incidentLocation": "Paulshof",
            "incidentTime": "Mon Dec 18 2017 01:13:01 GMT+0530 (IST)",
            "assignedUser": "Paul",
            "priority": "low",
            "createdTime": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "lastModified": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "incidentType": "accident",
            "customer": {
                "customerName": "Paul",
                "policyNumber": "1513539827172",
                "policyExpiryDate": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "dob": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "contactNumber": "1234567890",
                "customerAddress": "1 Estelle Rd, Pauslhof, Johannesburg, 2056",
                "insuredVehicleDetails": {
                    "brand": "Ford",
                    "make": "Punto"
                }
            }
        },
        "services": [
            {
                "serviceType": "ambulance",
                "details": {
                    "status": "requested",
                    "name": "Ambulance",
                    "serviceProviderName": "De Ye Wala",
                    "companyName": "De Ye",
                    "contact": "1234567890"
                },
                "comments": []
            },
            {
                "serviceType": "towing",
                "details": {
                    "status": "pickup",
                    "name": "Towing",
                    "serviceProviderName": "Ana Wala",
                    "companyName": "Ana",
                    "contact": "1234567890"
                }
            }
        ],
        "selected": false
    },
    {
        "case": {
            "agentName": "Agent John",
            "caseId": 123123,
            "customerName": "John",
            "policyNumber": 234234,
            "detectedBy": "",
            "incidentLocation": "Paulshof",
            "incidentTime": "Mon Dec 18 2017 01:13:01 GMT+0530 (IST)",
            "assignedUser": "Paul",
            "priority": "low",
            "createdTime": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "lastModified": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "incidentType": "accident",
            "customer": {
                "customerName": "Paul",
                "policyNumber": "1513539827172",
                "policyExpiryDate": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "dob": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "contactNumber": "1234567890",
                "customerAddress": "1 Estelle Rd, Pauslhof, Johannesburg, 2056",
                "insuredVehicleDetails": {
                    "brand": "Ford",
                    "make": "Punto"
                }
            }
        },
        "services": [
            {
                "serviceType": "ambulance",
                "details": {
                    "status": "requested",
                    "name": "Ambulance",
                    "serviceProviderName": "De Ye Wala",
                    "companyName": "De Ye",
                    "contact": "1234567890"
                },
                "comments": []
            },
            {
                "serviceType": "towing",
                "details": {
                    "status": "transit",
                    "name": "Towing",
                    "serviceProviderName": "Ana Wala",
                    "companyName": "Ana",
                    "contact": "1234567890"
                }
            }
        ],
        "selected": false
    },
    {
        "case": {
            "agentName": "Agent John",
            "caseId": 123123,
            "customerName": "John",
            "policyNumber": 234234,
            "detectedBy": "",
            "incidentLocation": "Paulshof",
            "incidentTime": "Mon Dec 18 2017 01:13:01 GMT+0530 (IST)",
            "assignedUser": "Paul",
            "priority": "",
            "createdTime": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "lastModified": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "customer": {
                "customerName": "Paul",
                "policyNumber": "1513539827172",
                "policyExpiryDate": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "dob": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "customerContactNumber": "1234567890",
                "customerAddress": "1 Estelle Rd, Pauslhof, Johannesburg, 2056",
                "insuredVehicleDetails": {
                    "brand": "Ford",
                    "make": "Punto"
                }
            }
        },
        "services": [
            {
                "serviceType": "ambulance",
                "details": {
                    "status": "requested",
                    "name": "Ambulance",
                    "serviceProviderName": "De Ye Wala",
                    "companyName": "De Ye",
                    "contact": "1234567890"
                },
                "comments": []
            },
            {
                "serviceType": "towing",
                "details": {
                    "status": "pickup",
                    "name": "Towing",
                    "serviceProviderName": "Ana Wala",
                    "companyName": "Ana",
                    "contact": "1234567890"
                }
            }
        ],
        "selected": false
    },
    {
        "case": {
            "agentName": "Agent John",
            "caseId": 123123,
            "customerName": "John",
            "policyNumber": 234234,
            "detectedBy": "",
            "incidentLocation": "Paulshof",
            "incidentTime": "Mon Dec 18 2017 01:13:01 GMT+0530 (IST)",
            "assignedUser": "Paul",
            "priority": "",
            "createdTime": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "lastModified": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "customer": {
                "customerName": "Paul",
                "policyNumber": "1513539827172",
                "policyExpiryDate": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "dob": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "customerContactNumber": "1234567890",
                "customerAddress": "1 Estelle Rd, Pauslhof, Johannesburg, 2056",
                "insuredVehicleDetails": {
                    "brand": "Ford",
                    "make": "Punto"
                }
            }
        },
        "services": [
            {
                "serviceType": "ambulance",
                "details": {
                    "status": "requested",
                    "name": "Ambulance",
                    "serviceProviderName": "De Ye Wala",
                    "companyName": "De Ye",
                    "contact": "1234567890"
                },
                "comments": []
            },
            {
                "serviceType": "towing",
                "details": {
                    "status": "pickup",
                    "name": "Towing",
                    "serviceProviderName": "Ana Wala",
                    "companyName": "Ana",
                    "contact": "1234567890"
                }
            }
        ],
        "selected": false
    },
    {
        "case": {
            
            "caseId": 123123,
            "customerName": "John",
            "policyNumber": 234234,
            "detectedBy": "",
            "incidentLocation": "Paulshof",
            "incidentTime": "Mon Dec 18 2017 01:13:01 GMT+0530 (IST)",
            "assignedUser": "Paul",
            "priority": "",
            "createdTime": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "lastModified": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
            "customer": {
                "customerName": "Paul",
                "policyNumber": "1513539827172",
                "policyExpiryDate": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "dob": "Mon Dec 18 2017 01:13:22 GMT+0530 (IST)",
                "customerContactNumber": "1234567890",
                "customerAddress": "1 Estelle Rd, Pauslhof, Johannesburg, 2056",
                "insuredVehicleDetails": {
                    "brand": "Ford",
                    "make": "Punto"
                }
            }
        },
        "selected": false
    }
]