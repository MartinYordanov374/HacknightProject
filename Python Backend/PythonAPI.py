from flask import Flask
from flask import request
from UI_Module import summarize_text

app = Flask(__name__)

@app.route("/execute", methods=["GET"])
def text_summarizer():
    file_path = request.args.get('filePath')
    summarized_text = summarize_text(file_path)
    
    
    return summarized_text

if __name__ == "__main__":
    app.run(debug=True)

    