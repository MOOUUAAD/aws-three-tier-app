<div align="center">

# 🚀 Building A Three-Tier Web App on AWS 🚀

</div>

> This project demonstrates how I built a fully functional, scalable Three-Tier Web Application by integrating a variety of powerful AWS services.

---

<div align="center">

### 🛠️ Tech Stack & Services Used

*Organized by architectural tier*

</div>

<div align="center">

| Layer                | Technologies & Services                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 🖥️ **Presentation Layer** | <div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap;"><div style="text-align: center;"><img src="https://skillicons.dev/icons?i=html,css,js" alt="HTML, CSS, JS" height="45"><br><sub>HTML/CSS/JS</sub></div> <div style="text-align: center;"><img src="https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg" alt="Amazon S3" height="45"><br><sub>Amazon S3</sub></div> <div style="text-align: center;"><img src="https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg" alt="Amazon CloudFront" height="45"><br><sub>CloudFront</sub></div></div> |
| 🧠 **Logic Layer**       | <div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap;"><div style="text-align: center;"><img src="https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg" alt="AWS API Gateway" height="45"><br><sub>API Gateway</sub></div> <div style="text-align: center;"><img src="https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg" alt="AWS Lambda" height="45"><br><sub>AWS Lambda</sub></div></div>                                                                                                                                                                                                                                                                                                                         |
| 🗃️ **Data Layer**        | <div style="display: flex; justify-content: center; align-items: center; gap: 20px; flex-wrap: wrap;"><div style="text-align: center;"><img src="https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg" alt="Amazon DynamoDB" height="45"><br><sub>DynamoDB</sub></div></div>                                                                                                                                                                                                                                                                                                                                  |

</div>
---

## 📚 Table of Contents

*   [Presentation Layer](#-presentation-layer)
*   [Logic Layer](#-logic-layer)
*   [Data Layer](#-data-layer)
*   [Debugging and Final Integration](#-debugging-and-final-integration)
*   [Conclusion](#-what-i-learned)

---

## 🖥️ Presentation Layer

The Presentation Layer is the frontend of the application, responsible for the user interface and user interaction. It's built with HTML, CSS, and JavaScript, hosted on S3, and delivered globally via CloudFront.

<details>
<summary><strong>Click to expand: Step-by-Step Frontend Setup</strong></summary>

### Step 1: Setting Up the Frontend Files

The foundation of the web application consists of three core files:

*   **`index.html`**: This file sets up the fundamental HTML structure of the web app, including the layout for content and interactive buttons.
*   **`styles.css`**: This file manages the application's visual appearance, ensuring it is user-friendly and responsive across different devices.
*   **`script.js`**: This file powers the app's interactivity, handling API requests to the AWS backend and displaying the retrieved data on the page.

### Step 2: Create an S3 Bucket and Host Files

I used an Amazon S3 bucket for scalable object storage, making it the ideal choice for hosting the static `HTML`, `CSS`, and `JavaScript` files.

*(Image of the S3 bucket will be displayed here)*

### Step 3: Create a CloudFront Distribution

To ensure low latency and high transfer speeds for users worldwide, I set up Amazon CloudFront, a Content Delivery Network (CDN), to serve the content from the S3 bucket.

#### Key Configuration Steps:
1.  **Create a CloudFront Distribution**: I pointed the distribution's origin to my S3 bucket.
2.  **Configure Origin Access Control (OAC)**: I enabled OAC to restrict direct access to the S3 bucket, ensuring that content is only served through CloudFront.
3.  **Set Default Root Object**: I set `index.html` as the default root object.
4.  **Update S3 Bucket Policy**: I updated the S3 bucket policy to grant CloudFront's OAC the necessary permissions to get objects.

Now, I can access my website using the secure CloudFront distribution URL.

*(Image of the working website will be displayed here)*

</details>

---

## 🧠 Logic Layer

The Logic Layer is the backend brain of the application. It processes requests from the frontend using a serverless approach with AWS Lambda and API Gateway.

<details>
<summary><strong>Click to expand: Step-by-Step Backend Setup</strong></summary>

### Step 1: Creating the Lambda Function

I wrote a Lambda function in Python to handle the backend logic. When triggered, this function queries the DynamoDB table based on the `userId` passed from the frontend.

*(Images of Lambda function creation and testing will be displayed here)*

### Step 2: Create API Gateway

API Gateway acts as the front door for the Lambda function. I set up a REST API to expose the Lambda function to the internet securely.

#### Key Configuration Steps:
1.  **Create a REST API**: I chose the REST API type for its flexibility.
2.  **Define a Resource and Method**: I created a `/users` resource with a `GET` method.
3.  **Link to Lambda**: I integrated the `GET` method with my Lambda function, allowing API Gateway to trigger it.
4.  **Deploy the API**: I deployed the API to a stage (e.g., `prod`) to make it publicly accessible.

This provides an **Invoke URL** that the frontend JavaScript can call.

*(Images of API Gateway creation and configuration will be displayed here)*

</details>

---

## 🗃️ Data Layer

The Data Layer is responsible for data persistence. I used Amazon DynamoDB, a fully managed NoSQL database, for fast and flexible data storage.

<details>
<summary><strong>Click to expand: Step-by-Step Database Setup</strong></summary>

### Step 1: Create a DynamoDB Table

I set up a simple DynamoDB table to store user data.

*   **Table Name**: `UserData`
*   **Partition Key**: `userId` (String)

After creating the table, I added some dummy data to test with.

*(Images of DynamoDB table creation and adding an item will be displayed here)*

### Step 2: Grant Lambda Permissions

To allow the Lambda function to read from the DynamoDB table, I attached the `DynamoDBReadDataOnly` policy to the Lambda function's execution role in IAM.

*(Images of adding permissions to the Lambda role will be displayed here)*

</details>

---

## 🔍 Debugging and Final Integration

Connecting all the tiers revealed a few common but critical issues that I needed to resolve.

<details>
<summary><strong>Click to expand: Debugging and Troubleshooting Steps</strong></summary>

### Issue 1: Missing API URL in `script.js`
Initially, the frontend couldn't communicate with the backend. Using the browser's developer tools, I found an error in `script.js`: the API Gateway Invoke URL was missing. I added the URL and re-uploaded the file to S3.

*(Image of the updated script.js file will be displayed here)*

### Issue 2: CloudFront Cache Invalidation
After updating the `script.js` file in S3, the website still didn't work because CloudFront was serving the old, cached version. I created a CloudFront **invalidation** for `/*` to force it to fetch the latest version of all files.

*(Image of CloudFront invalidation will be displayed here)*

### Issue 3: CORS Error
The final hurdle was a **CORS (Cross-Origin Resource Sharing)** error. The browser blocked the request because the API Gateway was not configured to accept requests from the CloudFront domain.

#### Solution:
1.  **Enable CORS in API Gateway**: I used the "Enable CORS" action in the API Gateway console, which automatically sets up the necessary `OPTIONS` method and headers. I specified my CloudFront URL as an allowed origin.
2.  **Add CORS Header in Lambda**: As a final step, I added the `Access-Control-Allow-Origin: '*'` header to the response object in my Lambda function to ensure the browser would accept the cross-origin response.

*(Images of enabling CORS and the final Lambda code will be displayed here)*

</details>

### ✅ Final Test

After successfully configuring CORS and refreshing the CloudFront distribution, the application worked as expected! Searching for a `userId` now correctly fetches and displays the data from DynamoDB.

*(Image of the final working application will be displayed here)*

---

## 🎓 What I Learned

*   **Three-Tier Architecture Implementation**: I successfully implemented a full three-tier architecture using a serverless and cloud-native approach on AWS.
*   **Seamless Service Integration**: I gained hands-on experience integrating S3, CloudFront, Lambda, API Gateway, and DynamoDB to create a cohesive application.
*   **Importance of CORS**: I learned how to diagnose and resolve CORS issues, a critical skill for developing web applications with separate frontend and backend resources.
*   **CloudFront Caching and Invalidation**: I understood the practical application of CDN caching and how to manage it with invalidations to deploy updates effectively.
*   **Iterative Debugging**: This project reinforced the importance of systematic debugging using browser tools, logs, and testing at each integration point.

This project was a fantastic demonstration of the power and flexibility of AWS for building modern, scalable, and secure applications.
