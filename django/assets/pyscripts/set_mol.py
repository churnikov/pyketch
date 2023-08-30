import js
from pyodide.ffi import create_proxy

def onclick(e):
    ketcher = js.document.getElementById("ifKetcher").contentWindow.ketcher
    ketcher.setMolecule("CN1C=NC2=C1C(=O)N(C(=O)N2C)C")


def main():
    button = js.document.getElementById("set-mol-btn")
    button.addEventListener("click", create_proxy(onclick))


main()
