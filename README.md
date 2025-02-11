# Inventory Management System

A Flask-based web application for managing inventory with an interactive UI, Bootstrap integration, and Chart.js for data visualization.

## Features
- Add, view, update, and delete products
- Responsive UI with Bootstrap
- Real-time inventory chart using Chart.js
- Uses Flask, SQLite, and AJAX for seamless data handling

## Technologies Used
- **Backend:** Flask, Flask-SQLAlchemy, Flask-CORS
- **Frontend:** HTML, CSS (Bootstrap), JavaScript (jQuery, AJAX)
- **Database:** SQLite
- **Charting Library:** Chart.js

## Installation Guide

### 1. Clone the Repository
```sh
git clone https://github.com/lakshmanvasu7/inventory-management.git
cd inventory-management

 ### 2. Set Up Virtual Environment

python -m venv venv
# Activate (Windows)
venv\Scripts\activate
# Activate (Mac/Linux)
source venv/bin/activate

###  3. Install Dependencies
pip install flask flask-sqlalchemy flask-cors

### 4. Initialize the Database
  python
>>> from app import db
>>> db.create_all()
>>> exit()

### 5. Run the Application

 python app.py
  
  ### 6. Open in Browser
  Go to http://127.0.0.1:5000/ to use the system


  this is Project Structure

  inventory_management/
│── app.py                # Main Flask application
│── inventory.db           # SQLite database (created automatically)
│── README.md              # Project documentation
│── templates/
│   └── index.html         # Frontend UI
│── static/
│   ├── styles.css         # CSS for styling
│   ├── script.js          # JavaScript for AJAX & Chart.js
│── venv/                  # Virtual environment (not included in Git)
