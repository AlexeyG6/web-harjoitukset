from pathlib import Path #Netistä löydetty moduuli, lisätty if lausetta varten, joka testaa onko json tiedostoa olemassa.
from flask import Flask, request
import json

app = Flask(__name__)
@app.route('/add', methods=['GET'])
def list(): 
        agrs = request.args
        en = agrs.get('en')
        fi = agrs.get('fi')
        responce = Listaa(en, fi)
        return responce
def Listaa(sana1, sana2):
    polku = Path("dictionary.json") #Luo olion "polku", jossa on esitetty tiedoston nimi, jota etsitään.
    if polku.is_file(): #Tarkistaa onko polku-olion nimistä teidostoa olemassa.
        with open("dictionary.json", "r") as infile:
            lista = json.load(infile)
            lista.append({'en': sana1, 'fi': sana2})
    else:
        lista = [{'en': sana1, 'fi': sana2}]
    json_object = json.dumps(lista, indent=4)
    with open("dictionary.json", "w") as outputfile:
        outputfile.write(json_object)
    return lista

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)
