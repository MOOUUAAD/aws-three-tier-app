Building A Three-Tier Web App on AWS

This project demonstrates how I built a Three-Tier Web Application using a variety of AWS services. It integrates Lambda, DynamoDB, CloudFront, API Gateway, and S3 to create a fully functional, scalable web application with dynamic data processing.

Key Features

Lambda: Used for serverless backend logic to handle requests and interact with DynamoDB.

DynamoDB: A NoSQL database used to store and retrieve user data efficiently.

API Gateway: Exposes the Lambda functions via RESTful APIs for seamless communication.

CloudFront: Acts as the CDN to deliver static content faster to end-users globally.

S3: Used for storing and serving static web assets (HTML, CSS, JavaScript files).

3-Tier Architecture

This application showcases how I seamlessly connected various AWS services to build a powerful, cost-effective web app. I can interact with the app by sending HTTP requests to an API Gateway endpoint, where Lambda functions process the data and return responses based on the DynamoDB contents.

(Image of the 3-tier architecture will be displayed here)

Table of Contents

Introduction

Presentation Layer

Step 1: Setting Up the Frontend

Step 2: Create an S3 Bucket and Upload the Files

Step 3: Create a CloudFront Distribution

Logic Layer

Creating the Lambda Function

Create API Gateway

Test the API Gateway and Copy the Invoke URL

Data Layer

Setting Up the Data Tier

Create a DynamoDB Table

Debugging and Final Integration

Fixing the Missing API URL

CloudFront Cache Invalidation

Resolving CORS Errors

Final Test

Conclusion

Presentation Layer
Step 1: Setting Up the Frontend

The first step in building the Three-Tier Web Application was to create the frontend structure. This step involved setting up the index.html, styles.css, and script.js files to serve as the foundation for the web application.

index.html: This file serves as the main HTML document that contains the structure of the web page. It defines the basic layout, such as the header, content section, and buttons, which will allow users to interact with the web app. The HTML structure also links to external CSS and JavaScript files to apply styling and functionality to the page.

styles.css: This file is responsible for the look and feel of the web application. It defines styles such as fonts, colors, padding, and layout configurations to create a user-friendly, visually appealing experience. The styles.css file ensures that the web application is responsive and displays correctly across different devices.

script.js: This JavaScript file provides the interactivity of the web app. It manages dynamic content, such as sending API requests to the backend (AWS API Gateway), and receiving and displaying data from the server. script.js handles client-side logic, including form submissions, error handling, and updating the UI with the response data.

These files serve as the frontend building blocks of the application. Once the user interacts with the web page, script.js communicates with the backend (hosted on AWS Lambda) through API calls, retrieves data from the DynamoDB database, and displays the results dynamically on the frontend.

For the file content, see my GitHub repository: https://github.com/Sinhaamisha5/AWS-Three-Tier-Web-Appliaction/

Step 2: Create an S3 Bucket and Upload the Files

After setting up the basic frontend files, the next step is to upload them using Amazon S3 (Simple Storage Service). S3 provides scalable object storage, making it an ideal choice for hosting static files such as HTML, CSS, and JavaScript.

(Image of the S3 bucket will be displayed here)

Step 3: Create a CloudFront Distribution

Amazon CloudFront is a Content Delivery Network (CDN) service that helps deliver static and dynamic web content, such as .html, .css, .js, and image files, with low latency and high transfer speeds to users worldwide.

In this step, I’ll use CloudFront to accelerate the delivery of my web application hosted on S3.

What is a CloudFront Distribution?

A CloudFront distribution is a set of instructions that tells CloudFront how to deliver content. When I create a CloudFront distribution, I specify the origin (e.g., my S3 bucket), the caching behavior, and the domain name from which CloudFront should serve the files.

How Does CloudFront Speed Up Distribution?

CloudFront speeds up the delivery of content by using caching. When a user requests a resource (e.g., a page, image, or script), CloudFront serves the content from the edge location closest to the user, which is typically in a different geographic region. This reduces the round-trip time required for the data to travel across the internet and enhances the user experience by providing faster load times.

Additionally, CloudFront caches the content in these edge locations, meaning that the same content doesn’t need to be retrieved from the origin (my S3 bucket) every time a new user accesses it. Once content is cached at an edge location, subsequent users who request that same content will receive it directly from the cache.

Setting up CloudFront for My S3 Bucket

Create a CloudFront Distribution:

Go to the CloudFront console in AWS.

Click Create Distribution.

In the Origin Settings, for the Origin Domain Name, select my S3 bucket.

(Image of CloudFront distribution creation will be displayed here)

Configure CloudFront for Restricted S3 Access:

Origin Access Control (OAC) is a feature that helps restrict access to an S3 bucket only through CloudFront.

In the Origin Settings, I enabled Origin Access Control.

I also ensured that my S3 bucket policy allows only CloudFront to retrieve content.

Configure Distribution Settings:

Configure the default root object (index.html).

(Image of CloudFront distribution settings will be displayed here)

Update S3 Bucket Policy:

I copied the policy provided by CloudFront.

I went to my S3 bucket's permissions and edited the bucket policy.

I pasted the policy and saved the changes.

(Image of S3 bucket policy update will be displayed here)

Now, I can access my website using the CloudFront distribution URL.

(Image of the working website will be displayed here)

Logic Layer
Moving on to the Logic Layer

Next, I’ll focus on the Logic Layer, where I integrate Lambda functions and API Gateway. The goal is that when I click on “Search” in the UI with a userID, the request will be sent to API Gateway. The API Gateway will then forward the request to the Lambda function, which will search for the corresponding user data.

(Images of Lambda function creation and testing will be displayed here)

For Lambda code, see my GitHub page.

Create API Gateway

After setting up the Lambda function, the next step is to create an API Gateway. API Gateway acts as a bridge between the frontend and my backend logic.

Here’s how I set up the API Gateway:

Create a New API:

In the AWS Console, I navigated to the API Gateway service and clicked on Create API.

I chose REST API.

Define a Resource:

I created a resource, for example, /user, for searching user data.

Create a GET Method:

I set up a GET method for this resource to retrieve user data.

Link to Lambda Function:

In the integration settings, I chose Lambda Function and selected the Lambda function I created earlier.

Deploy the API:

I deployed the API by creating a new stage (e.g., prod).

(Images of API Gateway creation and configuration will be displayed here)

Test the API Gateway and Copy the Invoke URL

Once the API Gateway is deployed, it provides an Invoke URL. This URL is the endpoint where my API is hosted. I can test the API by appending a query string to the URL, for example: https://mhlf4cvftg.execute-api.us-east-1.amazonaws.com/prod/users?userId=1.

Data Layer
Setting Up the Data Tier

The final step is setting up the Data Tier. This involves creating a DynamoDB table.

Create a DynamoDB Table

Log in to the AWS Management Console: I navigated to the DynamoDB service.

Create a Table:

Table Name: UserData

Partition Key: userId (String)

Enter an item (dummy data) into the table.

(Images of DynamoDB table creation and adding an item will be displayed here)

Next, I added permissions for the Lambda function to access DynamoDB.

(Images of adding permissions to the Lambda role will be displayed here)

Debugging and Final Integration
Missing API URL in script.js

Upon inspecting the browser console, I noticed an error in the script.js file. The API URL was missing. I updated the script.js file to include the correct API URL and re-uploaded it to the S3 bucket.

(Image of the updated script.js file will be displayed here)

CloudFront Cache Invalidation

The website still didn’t work as it was referencing the old API URL. To resolve this, I created an invalidation under the CloudFront distribution to force CloudFront to fetch the latest version of the files from the S3 bucket.

(Image of CloudFront invalidation will be displayed here)

CORS Error

I still received a CORS (Cross-Origin Resource Sharing) error. This happens because the API Gateway does not allow requests from other domains, such as my CloudFront distribution. To fix this, I enabled and configured CORS in my API Gateway to allow requests from my CloudFront distribution's origin.

(Images of enabling CORS in API Gateway will be displayed here)

As a last step, I also added the Access-Control-Allow-Origin: '*' header to my Lambda function's response.

(Image of the updated Lambda function code will be displayed here)

Final Test

After successfully configuring CORS and refreshing my CloudFront distribution, the application is now working as expected.

(Image of the final working application will be displayed here)

What Did I Learn?

Three-Tier Architecture Setup: I implemented a three-tier architecture with a Presentation Layer (S3 and CloudFront), a Logic Layer (Lambda and API Gateway), and a Data Tier (DynamoDB).

Integration Across Services: I successfully integrated multiple AWS services.

CORS Configuration: I learned the importance of configuring CORS in API Gateway.

CloudFront Caching: I understood how CloudFront caching works and how to use invalidations.

Debugging and Iterative Development: I gained hands-on experience in identifying and fixing issues.

This project demonstrates the power of AWS in building scalable, secure, and efficient applications.
