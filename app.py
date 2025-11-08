# app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    # call url_for('static', ...) within templates instead of here
    return render_template("index.html")

# Optional: also export 'application' (some platforms expect this)
application = app

# keep this so `python app.py` still works locally
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)