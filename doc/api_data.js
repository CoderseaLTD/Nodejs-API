define({ "api": [
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/patient/addNewPatient",
    "title": "Add Patient",
    "name": "Add_Patient",
    "group": "Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patientName",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>unique and requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surName",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bloodType",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complaint",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "homeNo",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactName",
            "description": "<p>optional</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactRelationship",
            "description": "<p>optional</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "contactPhoneNo",
            "description": "<p>optional</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;0&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Patient Added&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patientId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delete",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patientName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bloodType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "complaint",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "homeNo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contactName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contactRelationship",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "contactPhoneNo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n\"status\": \"0\",\n\"message\": \"Patient Added\",\n\"patient\": {\n\"patientId\": 3,\n\"delete\": \"false\",\n\"_id\": \"5b50692ad196681760cb5149\",\n\"patientName\": \"Ali\",\n\"email\": \"test2@test.com\",\n\"surName\": \"Hassan\",\n\"height\": 170,\n\"weight\": 70,\n\"gender\": \"male\",\n\"bloodType\": \"O+\",\n\"complaint\": \"fghfgh\",\n\"date\": \"2018-07-12T22:00:00.000Z\",\n\"homeNo\": 123456789,\n\"mobileNo\": 123456789,\n\"address\": \"Cairo ,Egypt\",\n\"contactName\": \"Ahmed\",\n\"contactRelationship\": \"Brother\",\n\"contactPhoneNo\": 987654321,\n\"created_at\": \"2018-07-19T10:34:18.849Z\",\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example Authorization error:",
          "content": "{\n\"status\": \"1\",\n\"message\": \"Authorization failed\"\n}",
          "type": "json"
        },
        {
          "title": "Example validation error:",
          "content": "{\n\"status\": \"2\",\n\"error\": \"Patients validation failed: patientName: Patient Name is required\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/patients.js",
    "groupTitle": "Patient"
  },
  {
    "version": "1.0.0",
    "type": "delete",
    "url": "/patient/:id",
    "title": "Delete Patient",
    "name": "Delete_Patient",
    "group": "Patient",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;0&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Patient deleted&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n\"status\": \"0\",\n\"message\": \"Patient deleted\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example Authorization error:",
          "content": "{\n\"status\": \"1\",\n\"message\": \"Authorization failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/patients.js",
    "groupTitle": "Patient"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/patient",
    "title": "Get All Patient",
    "name": "Get_All_Patient",
    "group": "Patient",
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n\"status\": \"0\",\n\"count\": 2,\n\"patients\": [\n{\n\"_id\": \"5b2d2972873b8f107c588368\",\n\"patientId\": 1,\n\"patientName\": \"gggg\",\n\"surName\": \"ggg\",\n\"email\": \"ggg@fff.com\",\n\"height\": 44,\n\"weight\": 44,\n\"gender\": \"male\",\n\"bloodType\": \"A+\",\n\"complaint\": \"sdfsdf\",\n\"date\": \"2018-06-21T22:00:00.000Z\",\n\"homeNo\": 34234234234,\n\"mobileNo\": 234234234234,\n\"address\": \"sdfsdfsd\",\n\"contactName\": \"sdfdsf\",\n\"contactRelationship\": \"sdfsdf\",\n\"contactPhoneNo\": 2555555555,\n\"delete\": \"false\"\n},\n{\n\"_id\": \"5b50692ad196681760cb5149\",\n\"patientId\": 3,\n\"patientName\": \"Ali\",\n\"surName\": \"Hassan\",\n\"email\": \"test2@test.com\",\n\"height\": 170,\n\"weight\": 70,\n\"gender\": \"male\",\n\"bloodType\": \"O+\",\n\"complaint\": \"fghfgh\",\n\"date\": \"2018-07-12T22:00:00.000Z\",\n\"homeNo\": 123456789,\n\"mobileNo\": 123456789,\n\"address\": \"Cairo ,Egypt\",\n\"contactName\": \"Ahmed\",\n\"contactRelationship\": \"Brother\",\n\"contactPhoneNo\": 987654321,\n\"delete\": \"false\"\n}\n]\n}\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example Authorization error:",
          "content": "{\n\"status\": \"1\",\n\"message\": \"Authorization failed\"\n}",
          "type": "json"
        },
        {
          "title": "Example validation error:",
          "content": "{\n\"status\": \"3\",\n\"message\": \"No Patients found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/patients.js",
    "groupTitle": "Patient"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/patient/:id",
    "title": "Get Patient",
    "name": "Get_Patient",
    "group": "Patient",
    "success": {
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n\"status\": \"0\",\n\"patient\": {\n\"patientId\": 3,\n\"delete\": \"false\",\n\"_id\": \"5b50692ad196681760cb5149\",\n\"patientName\": \"Ali\",\n\"email\": \"test2@test.com\",\n\"surName\": \"Hassan\",\n\"height\": 170,\n\"weight\": 70,\n\"gender\": \"male\",\n\"bloodType\": \"O+\",\n\"complaint\": \"fghfgh\",\n\"date\": \"2018-07-12T22:00:00.000Z\",\n\"homeNo\": 123456789,\n\"mobileNo\": 123456789,\n\"address\": \"Cairo ,Egypt\",\n\"contactName\": \"Ahmed\",\n\"contactRelationship\": \"Brother\",\n\"contactPhoneNo\": 987654321,\n\"created_at\": \"2018-07-19T10:34:18.849Z\",\n},\n\"visits_info\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example Authorization error:",
          "content": "{\n\"status\": \"1\",\n\"message\": \"Authorization failed\"\n}",
          "type": "json"
        },
        {
          "title": "Example validation error:",
          "content": "{\n\"status\": \"3\",\n\"message\": \"No found the Patient with ID : 5b50692ad196681760cb5166 \"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/patients.js",
    "groupTitle": "Patient"
  },
  {
    "version": "1.0.0",
    "type": "patch",
    "url": "/patient/:id",
    "title": "Update Patient",
    "name": "Update_Patient",
    "group": "Patient",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patientName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "surName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bloodType",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "complaint",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "homeNo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactName",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contactRelationship",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "contactPhoneNo",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;0&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Patient updated&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patientId",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "delete",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "_id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "patientName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "surName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "height",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "weight",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "bloodType",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "complaint",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "homeNo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "mobileNo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contactName",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contactRelationship",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "contactPhoneNo",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created_at",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "updated_at",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n\"status\": \"0\",\n\"message\": \"Patient updated\",\n\"patient\": {\n\"patientId\": 3,\n\"delete\": \"false\",\n\"_id\": \"5b50692ad196681760cb5149\",\n\"patientName\": \"hussien\",\n\"email\": \"test2@test.com\",\n\"surName\": \"Hassan\",\n\"height\": 170,\n\"weight\": 90,\n\"gender\": \"male\",\n\"bloodType\": \"O+\",\n\"complaint\": \"fghfgh\",\n\"date\": \"2018-07-12T22:00:00.000Z\",\n\"homeNo\": 123456789,\n\"mobileNo\": 123456789,\n\"address\": \"Cairo ,Egypt\",\n\"contactName\": \"Ahmed\",\n\"contactRelationship\": \"Brother\",\n\"contactPhoneNo\": 987654321,\n\"created_at\": \"2018-07-19T10:34:18.849Z\",\n\"updated_at\": \"2018-07-19T14:12:35.985Z\"\n}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example Authorization error:",
          "content": "{\n\"status\": \"1\",\n\"message\": \"Authorization failed\"\n}",
          "type": "json"
        },
        {
          "title": "Example validation error:",
          "content": "{\n\"status\": \"2\",\n\"error\": \"Patients validation failed: patientName: Patient Name is required\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/patients.js",
    "groupTitle": "Patient"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/signin",
    "title": "Signin",
    "name": "Signin",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>unique and requried.</p>"
          },
          {
            "group": "Parameter",
            "type": "password",
            "optional": false,
            "field": "password",
            "description": "<p>requried .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Auth successfully&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expiresIn",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": \"0\",\n    \"message\": \"Auth successfully\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDb2RlcnNlYV9hY2Nlc3NfdG9rZW4iLCJzdWIiOiI1YjRjZTAxMWZkODJjZjA3Nzg2N2MzZDIiLCJpYXQiOjE1MzE5OTYyMjI2NDIsImV4cCI6MTUzMTk5NzEyM30.bSjkxZ4mE7Ejzo1lzt7L8v6wxVg_6WMhfDXZ91sc9DY\",\n    \"refreshToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJDb2RlcnNlYV9yZWZyZXNoX3Rva2VuIiwic3ViIjoiNWI0Y2UwMTFmZDgyY2YwNzc4NjdjM2QyIiwiaWF0IjoxNTMxOTk2MjIyNjQzLCJleHAiOjE1MzQ1ODgyMjN9.hyl0Ym5C1Zqw2nu2UtUdm0b8c6Rz8ZernFMTkLdyHz0\",\n    \"expiresIn\": 1531997123,\n    \"userId\": \"5b4ce011fd82cf077867c3d2\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example validation error:",
          "content": " {\n    \"status\": \"2\",\n    \"message\": \"You entered wrong password\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/signup",
    "title": "Signup",
    "name": "Signup",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>unique and requried.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>requried .</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;User created&quot;</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": \"0\",\n    \"message\": \"User created\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example validation error:",
          "content": " {\n    \"status\": \"2\",\n    \"message\": \"Mail exists\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "version": "1.0.0",
    "type": "post",
    "url": "/visit/addVisit",
    "title": "Add Visit",
    "name": "Add_Visit",
    "group": "Visit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "visitorName",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "patient_id",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "comment",
            "description": "<p>requried</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "image",
            "description": "<p>requried</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;0&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Visit Added&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "visit",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "patient",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": \"0\",\n    \"message\": \"Visit Added\",\n    \"data\": {\n        \"visit\": {\n            \"delete\": \"false\",\n            \"_id\": \"5b509fc776f49d5bb003550b\",\n            \"visitorName\": \"Mohsen\",\n            \"patient_id\": \"5b50692ad196681760cb5149\",\n            \"date\": \"2018-07-16T22:00:00.000Z\",\n            \"comment\": \"test\",\n            \"image_id\": \"5b509fc776f49d5bb0035507\",\n            \"image\": \"uploads\\\\19Keto_Fuel.png\",\n            \"created_at\": \"2018-07-19T14:27:19.515Z\",\n            \"__v\": 0\n        },\n        \"patient\": {\n            \"patientId\": 3,\n            \"delete\": \"false\",\n            \"_id\": \"5b50692ad196681760cb5149\",\n            \"patientName\": \"hussien\",\n            \"email\": \"test2@test.com\",\n            \"surName\": \"Hassan\",\n            \"height\": 170,\n            \"weight\": 90,\n            \"gender\": \"male\",\n            \"bloodType\": \"O+\",\n            \"complaint\": \"fghfgh\",\n            \"date\": \"2018-07-12T22:00:00.000Z\",\n            \"homeNo\": 123456789,\n            \"mobileNo\": 123456789,\n            \"address\": \"Cairo ,Egypt\",\n            \"contactName\": \"Ahmed\",\n            \"contactRelationship\": \"Brother\",\n            \"contactPhoneNo\": 987654321,\n            \"created_at\": \"2018-07-19T10:34:18.849Z\",\n            \"__v\": 0,\n            \"updated_at\": \"2018-07-19T14:12:35.985Z\"\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example Authorization error:",
          "content": "{\n  \"status\": \"1\",\n  \"message\": \"Authorization failed\"\n}",
          "type": "json"
        },
        {
          "title": "Example validation error:",
          "content": " {\n    \"status\": \"2\",\n    \"error\": \"No Image uploaded\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/visits.js",
    "groupTitle": "Visit"
  },
  {
    "version": "1.0.0",
    "type": "get",
    "url": "/visit/:id",
    "title": "Get Visit",
    "name": "Get_Visit",
    "group": "Visit",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>&quot;0&quot;</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "visitInfo",
            "description": ""
          }
        ]
      },
      "examples": [
        {
          "title": "Example data on success:",
          "content": "{\n    \"status\": \"0\",\n    \"visitInfo\": {\n        \"delete\": \"false\",\n        \"_id\": \"5b509fc776f49d5bb003550b\",\n        \"visitorName\": \"Mohsen\",\n        \"patient_id\": \"5b50692ad196681760cb5149\",\n        \"date\": \"2018-07-16T22:00:00.000Z\",\n        \"comment\": \"test\",\n        \"image_id\": \"5b509fc776f49d5bb0035507\",\n        \"image\": \"uploads\\\\19Keto_Fuel.png\",\n        \"created_at\": \"2018-07-19T14:27:19.515Z\",\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Example Authorization error:",
          "content": "{\n  \"status\": \"1\",\n  \"message\": \"Authorization failed\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api/controllers/visits.js",
    "groupTitle": "Visit"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_var_www_html_codersea_api_medical_api_doc_main_js",
    "groupTitle": "_var_www_html_codersea_api_medical_api_doc_main_js",
    "name": ""
  }
] });
