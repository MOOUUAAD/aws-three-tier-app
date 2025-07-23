<div align="center">

# 🚀 Building A Three-Tier Web App on AWS 🚀

*A serverless and scalable 3-tier web application built on the AWS ecosystem.*

</div>

<!-- Project Status & Socials -->
<p align="center">
  <img src="https://img.shields.io/badge/Project_Status-Complete-brightgreen?style=for-the-badge" alt="Project Status: Complete"/>
  <!-- Optional: Add your social links -->
  <!-- <a href="YOUR_LINKEDIN_URL"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"/></a> -->
  <!-- <a href="YOUR_PORTFOLIO_URL"><img src="https://img.shields.io/badge/Portfolio-WebApp-blue?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Portfolio"/></a> -->
</p>

<!-- Introduction Card -->
<div align="center">
  <table style="width: 90%; border: 1px solid #444; border-radius: 8px; background-color: #161b22; padding: 15px;">
    <tr>
      <td>
        <h3 style="margin-top: 0;">🎯 Project Overview</h3>
        <p style="margin-bottom: 0;">This project demonstrates how I built a fully functional, scalable Three-Tier Web Application by integrating a variety of powerful AWS services. It showcases a modern, cloud-native approach to web development, from frontend delivery to backend logic and data persistence.</p>
      </td>
    </tr>
  </table>
</div>

---

<div align="center">

### 🛠️ Tech Stack & Services Used

*Organized by architectural tier*

</div>

<!-- The entire table is centered -->
<div align="center">
  <table style="width: 80%; border-collapse: collapse; border: 1px solid #444;">
    <thead style="background-color: #161b22;">
      <tr>
        <th style="border: 1px solid #444; padding: 12px; text-align: center;">Layer</th>
        <th style="border: 1px solid #444; padding: 12px; text-align: center;">Technologies & Services</th>
      </tr>
    </thead>
    <tbody>
      <!-- Presentation Layer Row -->
      <tr>
        <td style="width: 30%; border: 1px solid #444; padding: 15px; text-align: center; vertical-align: middle;">
          <strong>🖥️ Presentation Layer</strong>
        </td>
        <td style="border: 1px solid #444; padding: 15px;">
          <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
            <img src="https://skillicons.dev/icons?i=html,css,js" alt="HTML, CSS, JS" height="45">
            <img src="https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg" alt="Amazon S3" height="45">
            <img src="https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg" alt="Amazon CloudFront" height="45">
          </div>
        </td>
      </tr>
      <!-- Logic Layer Row -->
      <tr>
        <td style="border: 1px solid #444; padding: 15px; text-align: center; vertical-align: middle;">
          <strong>🧠 Logic Layer</strong>
        </td>
        <td style="border: 1px solid #444; padding: 15px;">
          <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
            <img src="https://icon.icepanel.io/AWS/svg/App-Integration/API-Gateway.svg" alt="AWS API Gateway" height="45">
            <img src="https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg" alt="AWS Lambda" height="45">
          </div>
        </td>
      </tr>
      <!-- Data Layer Row -->
      <tr>
        <td style="border: 1px solid #444; padding: 15px; text-align: center; vertical-align: middle;">
          <strong>🗃️ Data Layer</strong>
        </td>
        <td style="border: 1px solid #444; padding: 15px;">
          <div style="display: flex; justify-content: center; align-items: center; gap: 20px;">
            <img src="https://icon.icepanel.io/AWS/svg/Database/DynamoDB.svg" alt="Amazon DynamoDB" height="45">
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>


---

  ### 🏗️ 3-Tier Architecture

This application showcases how I seamlessly connected various AWS services to build a powerful, cost-effective web app. I can interact with the app by sending HTTP requests to an API Gateway endpoint, where Lambda functions process the data and return responses based on the DynamoDB contents.

<p align="center">
  <img width="633" height="467" alt="image" src="https://github.com/user-attachments/assets/4b8913d0-1a18-4913-942c-7055cb0cf93e" />
</p>

---

## 📚 Table of Contents

*   [Presentation Layer](#️-presentation-layer)
*   [Logic Layer](#-logic-layer)
*   [Data Layer](#️-data-layer)
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

<img width="1342" height="470" alt="image" src="https://github.com/user-attachments/assets/74b47315-23e2-4812-bfce-8239df16815d" />


### Step 3: Create a CloudFront Distribution

To ensure low latency and high transfer speeds for users worldwide, I set up Amazon CloudFront, a Content Delivery Network (CDN), to serve the content from the S3 bucket.

#### Key Configuration Steps:
1.  **Create a CloudFront Distribution**: I pointed the distribution's origin to my S3 bucket.
2.  **Configure Origin Access Control (OAC)**: I enabled OAC to restrict direct access to the S3 bucket, ensuring that content is only served through CloudFront.
3.  **Set Default Root Object**: I set `index.html` as the default root object.
4.  **Update S3 Bucket Policy**: I updated the S3 bucket policy to grant CloudFront's OAC the necessary permissions to get objects.

Now, I can access my website using the secure CloudFront distribution URL.

<img width="1366" height="679" alt="image" src="https://github.com/user-attachments/assets/d59fa25a-d461-4476-88a8-3c00cc79e5ab" />


</details>

---

## 🧠 Logic Layer

The Logic Layer is the backend brain of the application. It processes requests from the frontend using a serverless approach with AWS Lambda and API Gateway.

<details>
<summary><strong>Click to expand: Step-by-Step Backend Setup</strong></summary>

### Step 1: Creating the Lambda Function

I wrote a Lambda function in NodeJs to handle the backend logic. When triggered, this function queries the DynamoDB table based on the `userId` passed from the frontend.

<img width="1348" height="511" alt="image" src="https://github.com/user-attachments/assets/0ccbd92c-8486-4b6c-81ae-220e6d7fb49c" />


### Step 2: Create API Gateway

API Gateway acts as the front door for the Lambda function. I set up a REST API to expose the Lambda function to the internet securely.

#### Key Configuration Steps:
1.  **Create a REST API**: I chose the REST API type for its flexibility.
2.  **Define a Resource and Method**: I created a `/users` resource with a `GET` method.
3.  **Link to Lambda**: I integrated the `GET` method with my Lambda function, allowing API Gateway to trigger it.
4.  **Deploy the API**: I deployed the API to a stage (e.g., `prod`) to make it publicly accessible.

This provides an **Invoke URL** that the frontend JavaScript can call.

<img width="1069" height="410" alt="image" src="https://github.com/user-attachments/assets/27a2612e-7d6c-48a2-9f1a-72321ccef885" />


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

<img width="969" height="319" alt="image" src="https://github.com/user-attachments/assets/645b1f0d-080f-49be-9db8-3dce28583e50" />


### Step 2: Grant Lambda Permissions

To allow the Lambda function to read from the DynamoDB table, I attached the `DynamoDBReadDataOnly` policy to the Lambda function's execution role in IAM.

<img width="1041" height="285" alt="image" src="https://github.com/user-attachments/assets/0b5c22bc-6152-45da-8722-4b416551d8c5" />


</details>

---

## 🔍 Debugging and Final Integration

Connecting all the tiers revealed a few common but critical issues that I needed to resolve.

<details>
<summary><strong>Click to expand: Debugging and Troubleshooting Steps</strong></summary>

### Issue 1: Missing API URL in `script.js`
Initially, the frontend couldn't communicate with the backend. Using the browser's developer tools, I found an error in `script.js`: the API Gateway Invoke URL was missing. I added the URL and re-uploaded the file to S3.


### Issue 2: CloudFront Cache Invalidation
After updating the `script.js` file in S3, the website still didn't work because CloudFront was serving the old, cached version. I created a CloudFront **invalidation** for `/*` to force it to fetch the latest version of all files.

<img width="1081" height="436" alt="image" src="https://github.com/user-attachments/assets/e52b9241-2207-4535-aaf3-375868c4d981" />



</details>

### ✅ Final Test

After successfully configuring CORS and refreshing the CloudFront distribution, the application worked as expected! Searching for a `userId` now correctly fetches and displays the data from DynamoDB.

<img width="1365" height="680" alt="image" src="https://github.com/user-attachments/assets/5904d11b-bbf4-407f-be7c-e30a145e37c7" />


---

## 🎓 What I Learned

*   **Three-Tier Architecture Implementation**: I successfully implemented a full three-tier architecture using a serverless and cloud-native approach on AWS.
*   **Seamless Service Integration**: I gained hands-on experience integrating S3, CloudFront, Lambda, API Gateway, and DynamoDB to create a cohesive application.
*   **Importance of CORS**: I learned how to diagnose and resolve CORS issues, a critical skill for developing web applications with separate frontend and backend resources.
*   **CloudFront Caching and Invalidation**: I understood the practical application of CDN caching and how to manage it with invalidations to deploy updates effectively.
*   **Iterative Debugging**: This project reinforced the importance of systematic debugging using browser tools, logs, and testing at each integration point.

This project was a fantastic demonstration of the power and flexibility of AWS for building modern, scalable, and secure applications.
