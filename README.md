Backend Todo List Management System - AZGUARDS ASSIGNMENT

There are several steps to access this code, please read carefully before implementation.

**NOTE:** ALL APIs ARE WORKING PROPERLY. I HAVE CHECKED ALL APIs BEFORE PUSHING THIS CODE.

**Step 1:**  
Command 1: `npm init` (for setting up the Node environment)  
Command 2: `npm install` (to install all dependencies)

**Step 2:**  
Command 1: `npm start` (to start the server)  
Command 2: Use Postman or any other API testing tool to test the APIs.

**Step 3: POST Data**  
Command 1: `http://localhost:7000/todos` (use this API to post data ,Please see the schema before posting the data.)

**Step 4: GET ALL Data**  
Command 1: `http://localhost:7000/todos` (use this API to get all the data)

**Step 5: Get Data By Id**  
Command 1: `http://localhost:7000/todos/:TaskId` (Enter Id in place of "TaskId" and get that data)

**Step 6: PUT Update Data**  
Command 1: `http://localhost:7000/todos/:TaskId` (Enter TaskId to update data)

**Step 7: DELETE Data**  
Command 1: `http://localhost:7000/todos/:TaskId` (Enter TaskId to delete data)

**Step 8: Get by status**  
Command 1: `http://localhost:7000/todos/status/:status`  
(Enter the status and find data, but use one of these: {"pending", "completed", "process"} else you will see an error)

**Step 9: GET Upload CSV-FILE**

- Create an "upload" folder before hitting the API.  
  Command 1: `http://localhost:7000/todos/upload` (to upload a file)

**Step 10: GET Download Data From Database**  
Command 1: `http://localhost:7000/todos/download` (hit this API to download data from the database)

**NOTE:** If you encounter a server error, try changing the port. You can change the port by modifying the configuration in the app.js file.

If you have any queries, please email me or call me!

Thanks for reading,
Chaitanya Sharma  
Chaitanyasharma266@gmail.com
