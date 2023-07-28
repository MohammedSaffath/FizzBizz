from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow CORS for all routes


# API 
@app.route('/api/fizzbuzz', methods=['GET'])
def fizzbuzz():
    # fizzbuzz function 
    result = []
    for num in range(1, 101):
        # Multiple of 3 and 5
        if num % 3 == 0 and num % 5 == 0:
            result.append('FizzBuzz')
        # Multiple of 3
        elif num % 3 == 0:
            result.append('Fizz')
        # Multiple of 5
        elif num % 5 == 0:
            result.append('Buzz')
        else:
            result.append(num)
    return jsonify(result)

if __name__ == '__main__':
    # Running Backend in local host
    app.run(host='localhost', port=5000, debug=True)
