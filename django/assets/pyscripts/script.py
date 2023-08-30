import js
from pyodide.http import pyfetch, FetchResponse
from typing import Optional, Any
import asyncio
import json


async def get_mol():
    ketcher = js.document.getElementById("ifKetcher").contentWindow.ketcher
    return await ketcher.getSmiles()



async def request(url: str, method: str = "GET", body: Optional[str] = None,
                  headers: Optional[dict[str, str]] = None, **fetch_kwargs: Any) -> FetchResponse:
    """
    Async request function. Pass in Method and make sure to await!
    Parameters:
        url: str = URL to make request to
        method: str = {"GET", "POST", "PUT", "DELETE"} from `JavaScript` global fetch())
        body: str = body as json string. Example, body=json.dumps(my_dict)
        headers: dict[str, str] = header as dict, will be converted to string...
            Example, headers=json.dumps({"Content-Type": "application/json"})
        fetch_kwargs: Any = any other keyword arguments to pass to `pyfetch` (will be passed to `fetch`)
    Return:
        response: pyodide.http.FetchResponse = use with .status or await.json(), etc.
    """
    kwargs = {"method": method, "mode": "cors"}  # CORS: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
    if body and method not in ["GET", "HEAD"]:
        kwargs["body"] = body
    if headers:
        kwargs["headers"] = headers
    kwargs.update(fetch_kwargs)

    response = await pyfetch(url, **kwargs)
    return response


async def predict(e):
    csrf_token = js.document.getElementsByName("csrfmiddlewaretoken")[0].value
    smiles = await get_mol()
    data = await request("predict/", method="POST", body=json.dumps({"smiles": smiles}), headers={"Content-type": "application/json", "X-CSRFToken": csrf_token})
    print(await data.json())


async def main():
    button = js.document.getElementById("predict-btn")
    button.addEventListener("click", create_proxy(predict))


asyncio.ensure_future(main())
