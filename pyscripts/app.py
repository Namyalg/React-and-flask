from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from enter_case import classify_utterance

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/foo": {"origins": "http://localhost:3000"}})

@app.route('/<int:num>', methods=['GET'])
def hello_world(num):
    return "hello"

@app.route('/foo', methods=['POST'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def foo():
    data = request.get_json()
    result = classify_utterance(data["case"])
    return jsonify(message=result[0])

if __name__ == '__main__':
   app.run()
