export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
            text-align: center;
            color: #ffffff;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 20px;
            color: #333333;
            margin-bottom: 20px;
        }
        
        .message {
            font-size: 16px;
            line-height: 1.6;
            color: #555555;
            margin-bottom: 30px;
        }
        
        .code-container {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            margin: 30px 0;
        }
        
        .verification-code {
            font-size: 36px;
            font-weight: bold;
            letter-spacing: 8px;
            color: #ffffff;
            font-family: 'Courier New', monospace;
        }
        
        .code-label {
            color: #ffffff;
            font-size: 14px;
            margin-bottom: 15px;
            opacity: 0.9;
        }
        
        .info-box {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #667eea;
            margin: 25px 0;
        }
        
        .info-box p {
            font-size: 14px;
            color: #555555;
            margin-bottom: 8px;
        }
        
        .info-box p:last-child {
            margin-bottom: 0;
        }
        
        .warning {
            color: #ff6b6b;
            font-weight: 600;
        }
        
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 30px 0;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
        }
        
        .footer p {
            font-size: 13px;
            color: #777777;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Verify Your Email 🔐</h1>
            <p>Please confirm your email address</p>
        </div>
        
        <div class="content">
            <h2 class="greeting">Hi {{name}},</h2>
            
            <p class="message">
                Thank you for signing up with NodeJS Auth! To complete your registration and 
                secure your account, please verify your email address using the code below.
            </p>
            
            <div class="code-container">
                <p class="code-label">YOUR VERIFICATION CODE</p>
                <div class="verification-code">{{verificationCode}}</div>
            </div>
            
            <p class="message" style="text-align: center; margin-bottom: 20px;">
                Enter this code on the verification page to complete your registration.
            </p>
            
            <div class="info-box">
                <p><strong>⏰ Time Sensitive:</strong> This code will expire in <span class="warning">15 minutes</span> for security reasons.</p>
                <p><strong>🔒 Security:</strong> Never share this code with anyone. Our team will never ask for it.</p>
            </div>
            
            <div class="divider"></div>
            
            <p class="message" style="font-size: 14px;">
                If you didn't create an account with us, please ignore this email or contact our support team 
                at <a href="mailto:support@mohsinjameel.dev" style="color: #667eea;">support@mohsinjameel.dev</a> if you have concerns.
            </p>
            
            <p class="message" style="font-size: 14px; color: #777777;">
                Best regards,<br>
                <strong>NodeJS Auth Team</strong>
            </p>
        </div>
        
        <div class="footer">
            <p>&copy; 2024 NodeJS Auth. All rights reserved.</p>
            <p style="font-size: 12px; color: #999999;">
                This email was sent to {{email}}
            </p>
            <p style="font-size: 11px; color: #999999; margin-top: 10px;">
                This is an automated message, please do not reply to this email.
            </p>
        </div>
    </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
            text-align: center;
            color: #ffffff;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 20px;
            color: #333333;
            margin-bottom: 20px;
        }
        
        .message {
            font-size: 16px;
            line-height: 1.6;
            color: #555555;
            margin-bottom: 30px;
        }
        
        .success-icon {
            text-align: center;
            margin: 30px 0;
        }
        
        .success-icon-circle {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            color: #ffffff;
            font-size: 40px;
            box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }
        
        .alert-box {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px 20px;
            border-radius: 4px;
            margin: 25px 0;
        }
        
        .alert-box p {
            color: #856404;
            font-size: 14px;
            margin: 0;
        }
        
        .info-box {
            background-color: #f8f9fa;
            padding: 25px;
            border-radius: 6px;
            margin: 30px 0;
        }
        
        .info-box h3 {
            color: #333333;
            font-size: 18px;
            margin-bottom: 15px;
        }
        
        .info-item {
            display: flex;
            align-items: start;
            margin-bottom: 12px;
        }
        
        .info-icon {
            color: #667eea;
            margin-right: 10px;
            font-size: 20px;
        }
        
        .info-text {
            color: #555555;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
        }
        
        .footer p {
            font-size: 13px;
            color: #777777;
            margin-bottom: 10px;
        }
        
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 30px 0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Password Reset Successful ✓</h1>
            <p>Your password has been changed</p>
        </div>
        
        <div class="content">
            <h2 class="greeting">Hi {{name}},</h2>
            
            <p class="message">
                We're writing to confirm that your password has been successfully reset for your NodeJS Auth account.
            </p>
            
            <div class="success-icon">
                <div class="success-icon-circle">
                    ✓
                </div>
            </div>
            
            <p class="message">
                Your account is now secure with your new password. You can log in immediately using your updated credentials.
            </p>
            
            <div class="alert-box">
                <p><strong>⚠️ Didn't make this change?</strong> If you did not initiate this password reset, please contact our support team immediately.</p>
            </div>
            
            <div class="info-box">
                <h3>Security best practices:</h3>
                <div class="info-item">
                    <span class="info-icon">✓</span>
                    <span class="info-text">Use a strong, unique password for your account</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">✓</span>
                    <span class="info-text">Enable two-factor authentication if available</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">✓</span>
                    <span class="info-text">Avoid using the same password across multiple sites</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">✓</span>
                    <span class="info-text">Regularly update your password every few months</span>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <p class="message" style="font-size: 14px;">
                If you have any questions or concerns about your account security, please contact our support team 
                at <a href="mailto:support@mohsinjameel.dev" style="color: #667eea;">support@mohsinjameel.dev</a>
            </p>
            
            <p class="message" style="font-size: 14px; color: #555555;">
                Thank you for helping us keep your account secure.
            </p>
        </div>
        
        <div class="footer">
            <p>&copy; 2024 NodeJS Auth. All rights reserved.</p>
            <p style="font-size: 12px; color: #999999;">
                This email was sent to {{email}}
            </p>
            <p style="font-size: 11px; color: #999999; margin-top: 15px;">
                This is an automated message, please do not reply to this email.
            </p>
        </div>
    </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
            text-align: center;
            color: #ffffff;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 20px;
            color: #333333;
            margin-bottom: 20px;
        }
        
        .message {
            font-size: 16px;
            line-height: 1.6;
            color: #555555;
            margin-bottom: 30px;
        }
        
        .cta-button {
            display: inline-block;
            padding: 14px 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 600;
            font-size: 16px;
            margin: 20px 0;
            transition: transform 0.2s;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        .button-container {
            text-align: center;
            margin: 30px 0;
        }
        
        .warning-box {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px 20px;
            border-radius: 4px;
            margin: 25px 0;
        }
        
        .warning-box p {
            color: #856404;
            font-size: 14px;
            margin: 0;
        }
        
        .info-box {
            background-color: #f8f9fa;
            padding: 25px;
            border-radius: 6px;
            margin: 30px 0;
        }
        
        .info-box h3 {
            color: #333333;
            font-size: 18px;
            margin-bottom: 15px;
        }
        
        .info-item {
            display: flex;
            align-items: start;
            margin-bottom: 12px;
        }
        
        .info-icon {
            color: #667eea;
            margin-right: 10px;
            font-size: 20px;
        }
        
        .info-text {
            color: #555555;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
        }
        
        .footer p {
            font-size: 13px;
            color: #777777;
            margin-bottom: 10px;
        }
        
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 30px 0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Password Reset Request 🔐</h1>
            <p>We received a request to reset your password</p>
        </div>
        
        <div class="content">
            <h2 class="greeting">Hi {{name}},</h2>
            
            <p class="message">
                We received a request to reset the password for your NodeJS Auth account. 
                If you made this request, click the button below to create a new password.
            </p>
            
            <div class="button-container">
                <a href="{{resetURL}}" class="cta-button">Reset Your Password</a>
            </div>
            
            <div class="warning-box">
                <p><strong>⏰ This link will expire in 1 hour</strong> for security reasons.</p>
            </div>
            
            <div class="info-box">
                <h3>Security tips:</h3>
                <div class="info-item">
                    <span class="info-icon">✓</span>
                    <span class="info-text">Never share your password reset link with anyone</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">✓</span>
                    <span class="info-text">Choose a strong, unique password</span>
                </div>
                <div class="info-item">
                    <span class="info-icon">✓</span>
                    <span class="info-text">If you didn't request this, please ignore this email</span>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <p class="message" style="font-size: 14px;">
                If you have any questions or concerns about your account security, please contact our support team 
                at <a href="mailto:support@mohsinjameel.dev" style="color: #667eea;">support@mohsinjameel.dev</a>
            </p>
            
            <p class="message" style="font-size: 13px; color: #777777;">
                If you didn't request a password reset, you can safely ignore this email. Your password will remain unchanged.
            </p>
        </div>
        
        <div class="footer">
            <p>&copy; 2024 NodeJS Auth. All rights reserved.</p>
            <p style="font-size: 12px; color: #999999;">
                This email was sent to {{email}}
            </p>
            <p style="font-size: 11px; color: #999999; margin-top: 15px;">
                This is an automated message, please do not reply to this email.
            </p>
        </div>
    </div>
</body>
</html>
`;
export const WELCOME_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to NodeJS Auth</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 20px;
            text-align: center;
            color: #ffffff;
        }
        
        .header h1 {
            font-size: 28px;
            margin-bottom: 10px;
        }
        
        .header p {
            font-size: 16px;
            opacity: 0.9;
        }
        
        .content {
            padding: 40px 30px;
        }
        
        .greeting {
            font-size: 20px;
            color: #333333;
            margin-bottom: 20px;
        }
        
        .message {
            font-size: 16px;
            line-height: 1.6;
            color: #555555;
            margin-bottom: 30px;
        }
        
        .cta-button {
            display: inline-block;
            padding: 14px 40px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            font-weight: 600;
            font-size: 16px;
            margin: 20px 0;
            transition: transform 0.2s;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
        }
        
        .features {
            background-color: #f8f9fa;
            padding: 25px;
            border-radius: 6px;
            margin: 30px 0;
        }
        
        .features h3 {
            color: #333333;
            font-size: 18px;
            margin-bottom: 15px;
        }
        
        .feature-item {
            display: flex;
            align-items: start;
            margin-bottom: 12px;
        }
        
        .feature-icon {
            color: #667eea;
            margin-right: 10px;
            font-size: 20px;
        }
        
        .feature-text {
            color: #555555;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .footer {
            background-color: #f8f9fa;
            padding: 30px;
            text-align: center;
            border-top: 1px solid #e0e0e0;
        }
        
        .footer p {
            font-size: 13px;
            color: #777777;
            margin-bottom: 10px;
        }
        
        .social-links {
            margin: 20px 0;
        }
        
        .social-links a {
            display: inline-block;
            margin: 0 10px;
            color: #667eea;
            text-decoration: none;
            font-size: 14px;
        }
        
        .divider {
            height: 1px;
            background-color: #e0e0e0;
            margin: 30px 0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Welcome to NodeJS Auth! 🎉</h1>
            <p>Your account has been successfully created</p>
        </div>
        
        <div class="content">
            <h2 class="greeting">Hi {{name}},</h2>
            
            <p class="message">
                Thank you for joining NodeJS Auth! We're excited to have you on board. 
                Your account has been successfully created and you're all set to get started.
            </p>
            
            <div class="features">
                <h3>What you can do now:</h3>
                <div class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span class="feature-text">Access your secure dashboard and manage your profile</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span class="feature-text">Explore all available features with full authentication</span>
                </div>
                <div class="feature-item">
                    <span class="feature-icon">✓</span>
                    <span class="feature-text">Keep your data safe with industry-standard security</span>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <p class="message" style="font-size: 14px;">
                If you have any questions or need assistance, feel free to reach out to our support team 
                at <a href="mailto:support@mohsinjameel.dev" style="color: #667eea;">support@mohsinjameel.dev</a>
            </p>
            
            <p class="message" style="font-size: 13px; color: #777777;">
                If you didn't create this account, please ignore this email or contact support if you have concerns.
            </p>
        </div>
        
        <div class="footer">
            <p>&copy; 2024 NodeJS Auth. All rights reserved.</p>
            <p style="font-size: 12px; color: #999999;">
                This email was sent to {{email}}
            </p>
        </div>
    </div>
</body>
</html>`;
