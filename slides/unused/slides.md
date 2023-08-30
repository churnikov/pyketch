<!-- <link rel="stylesheet" href="https://pyscript.net/releases/2022.12.1/pyscript.css" /> -->
<!-- <script defer src="https://pyscript.net/releases/2022.12.1/pyscript.js"></script> --> 

## Build Drug Discovery web applications with PyScript, Ketcher and rdkit

---

## Plan


- How it all started
<!-- pycon sweden -->
- Architecture
<!-- Can show the idea directly in the presentation -->
<!-- Draw molecules somehow -> get this data -> send it to some compute application -> Get data back and display it on the frontend. -->
- Links to other solutions
<!-- But we don't have time for this -->
- Showcase tools:
    - Ketcher
    - rdkit
    - pyscript
- Initial version: single page
- Going back
<!-- Show that ketcher, pyscript and rdkit were actually called in the presentation -->
- Other solutions on top of it:
    - Django
    - Panel
- Conclusion
<!-- Is it even worth it? Almost all of it could be done with js. In my opinion, yes, because in the worst case, you
will be encouraged to learn js. --> 
---
It all started in 2020 in pharmaceutical company in Saint-Petersburg.

<!-- Insert some beautiful photos from your collection -->

----

We wanted to make a small application with molecules as drawn input and do some predictions via the queue.

So we settled on marvin-js with dash as there is a library for that. But how it worked, it was not sleek, but it worked.

---
And then, two years later I saw this talk

<iframe width="560" height="315" src="https://www.youtube.com/embed/ocpVSExSDvw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


----

It seems like it could solve all my problems!

---

TODO Check out jupyter notebook

<py-repl>
def f(x):
    print(x)
f(1)
</py-repl>

---

<py-script>
print("hello!")
print("world")
</py-script>

---

<button id="get-mol-btn">get molecule</button>
<iframe id="ifKetcher" src="ketcher/index.html" width="800" height="600"></iframe>

<py-script src="pyscripts/get_mol.py"></py-script>
---

# Title

- Point 1
- Point 2
- <div id="mol-placeholder"></div>

---

## Second slide

> Best quote ever.

```js
console.log('Hello world!');
```
Note: speaker notes FTW!



---

```python [1|3-6]
n = 0
while n < 10:
  if n % 2 == 0:
    print(f"{n} is even")
  else:
    print(f"{n} is odd")
  n += 1
```


---

# Conclusion

- PyScript makes frontend development less intimidating;
