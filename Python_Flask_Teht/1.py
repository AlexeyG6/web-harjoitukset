from flask import Flask, request

app = Flask(__name__)
@app.route('/prime_number/<int:num>', methods=['GET'])
def prime_num(num):
    try:
        response = {'Number': num, 'isPrime': isPrime(num)}
        return response
    except (ValueError, TypeError):
        return {'error': 'Invalid input'}, 400

def isPrime(n):
    if n <= 1:
        return False
    for i in range(2, int(n**0.5) + 1):
        if n % i == 0:
            return False
    return True

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)