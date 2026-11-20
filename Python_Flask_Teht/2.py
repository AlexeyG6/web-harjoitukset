from flask import Flask, request
import json

app = Flask(__name__)
@app.route('/add/en=<str:sana1>&fi=<str:sana2>', methods=['GET'])
def list(sana1, sana2):   
    try:
        responce = {lista}
        return responce
    except (ValueError, TypeError):
            return {'error': 'Invalid input'}, 400

lista = {}
def Listaa(sana1, sana2):
    lista.append({'en': sana1, 'fi': sana2})
    json_object = json.dumps(lista, indent=4)
    with open("dictionary.json", "w") as outfile:
        outfile.write(json_object)

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)
