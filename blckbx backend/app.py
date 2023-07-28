from flask import Flask, jsonify

app = Flask(__name__)
#FizzBuzz Code
def fizzbuzz(number):
    #multiple of 3 and 5
    if number % 3 == 0 and number % 5 == 0:
        return "FizzBuzz"
    
    #multiple of 3 
    elif number % 3 == 0:
        return "Fizz"
    #multiple of 5

    elif number % 5 == 0:
        return "Buzz"
    else:
        return str(number)

#creating api using flask
@app.route('/api/fizzbuzz', methods=['GET'])
def get_fizzbuzz():
    result = [fizzbuzz(number) for number in range(1, 101)]

    #Converting Result into Json
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
