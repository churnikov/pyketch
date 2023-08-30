from dash import Dash, dcc, html, Input, Output, callback, State

external_scripts = [
            "https://pyscript.net/latest/pyscript.js"
        ]

app = Dash(__name__, external_scripts=external_scripts)

app.index_string = '''
<!DOCTYPE html>
<html>
    <head>
        {%metas%}
        <title>{%title%}</title>
        {%favicon%}
        {%css%}
    </head>
    <body>
        <div>My Custom header</div>
        <py-script src="assets/pyscripts/set_molecule.py"></py-script>
        <py-script src="assets/pyscripts/current_time.py"></py-script>
        <py-repl>import js</py-repl>
        <iframe id="ifKetcher" src="assets/ketcher/index.html" width="800" height="600"></iframe>
        <button py-click="current_time()" id="get-time" class="py-button">Get current time</button>
        {%app_entry%}
        <footer>
            {%config%}
            {%scripts%}
            {%renderer%}
        </footer>
        <div>My Custom footer</div>
    </body>
</html>
'''

app.layout = html.Div([
    html.H6("Change the value in the text box to see callbacks in action!"),
    html.Div([
        "Input: ",
        dcc.Input(id='my-input', value='initial value', type='text')
    ]),
    html.Br(),
    html.Button('Submit', id='submit-val', n_clicks=0),
    html.Br(),
    html.Div(id='my-output'),

])


@callback(
    Output(component_id='my-output', component_property='children'),
    Input('submit-val', 'n_clicks'),
    Input('get-time', 'value'),
    State(component_id='my-input', component_property='value')
)
def update_output_div(n_clicks, time_, input_value):
    return f'Output: {input_value} {time_}'


if __name__ == '__main__':
    app.run(debug=True)
