# 🌐 Emergency Response Network

**Live Project Link:** [https://your-live-project-link.com](https://your-live-project-link.com)

## 🆘 About the Project

The **Emergency Response Network** is a community-based web application designed to help people report emergencies quickly and efficiently. It connects users in distress with nearby volunteers and emergency responders through real-time communication and location-based support.

This platform includes user report submission, volunteer registration, and a secure admin dashboard to manage and respond to emergencies. It also supports features like blood donation requests and real-time notifications.

---

## 🚨 Features

- **Emergency Reporting**: Users can report emergencies by filling out a simple form with details like location, type of emergency, contact info, and description.
- **Volunteer Matching**: Upon report submission, the system automatically identifies and notifies the nearest available volunteer via **email**.
- **Call/Email/Chat Support**:
  - If enabled, users can directly **call** a provided emergency contact number.
  - An **email** is sent to the admin and nearest volunteer with report details.
  - **Live chat integration** (optional) allows real-time communication with support or volunteers.
- **Blood Donation Requests**: Users can fill out a separate blood donation form that is submitted to the admin and displayed on the dashboard for visibility.
- **Admin Dashboard**:
  - View and manage all submitted reports
  - Assign or remove volunteers
  - Secure login with role-based access control
- **Authentication**: JWT-based login for secure admin and volunteer access.

---

## 🧰 Tech Stack

- **Frontend**: React, CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JSON Web Tokens (JWT)
- **Email Service**: Nodemailer
- **Deployment**: Render / Vercel / Ngrok (for testing)

---

## 🛠 How It Works

1. A user submits an emergency report form with all required details.
2. The backend processes the request and:
   - Sends an **email notification** to the nearest registered volunteer (based on location logic).
   - Sends an **email alert** to the admin team.
3. The admin can view the report, assign volunteers, and track the situation from the dashboard.
4. Optional call and live chat features allow further communication if enabled.

---

## 📫 Contact

For questions, suggestions, or collaboration, feel free to reach out via:

- Email: [youremail@example.com](mailto:youremail@example.com)
- Live Chat: Integrated chat module (if enabled)
- Emergency Contact: +91-XXXXXXXXXX

---

## 📌 Future Improvements

- Real-time map tracking of emergencies and volunteers
- SMS alerts for volunteers
- Automated call integration using Twilio or similar services
- Push notifications

---

## 📎 License

This project is open-source and available under the [MIT License](LICENSE).
