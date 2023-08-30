import js
import asyncio
async def get_smiles():
    ketcherFrame = js.document.getElementById('ifKetcher')
    ketcher = ketcherFrame.contentWindow.ketcher
    await ketcher.setMolecule("CN1C=NC2=C1C(=O)N(C(=O)N2C)C")
    return await ketcher.getSmiles()
asyncio.ensure_future(get_smiles())
