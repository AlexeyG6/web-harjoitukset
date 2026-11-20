from flask import Flask, request

app = Flask(__name__)
@app.route('/add/en=<sana1>&fi=<sana2>', methods=['GET'])
def lista():   
    try:
        sana1 = request.args.get('en')
        sana2 = request.args.get('fi')
        responce = {'en': sana1, 'fi': sana2}
        return responce
    except (ValueError, TypeError):
            return {'error': 'Invalid input'}, 400

def Listaa(sana1, sana2):
    lista = [sana1, sana2]
    return f"{lista}"

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)