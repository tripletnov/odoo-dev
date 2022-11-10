from odoo import http
from odoo.http import request


class Main(http.Controller):

    @http.route('/test', type='http', auth='none')
    def all_books(self):

        return '''
        <!-- W3hubs.com - Download Free Responsive Website Layout Templates designed on HTML5 CSS3,Bootstrap,Tailwind CSS which are 100% Mobile friendly. w3Hubs all Layouts are responsive cross browser supported, best quality world class designs. -->
            <html>
            <head>
            <title>Calculator In Javascript With Bootstrap 4</title>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
                <link rel="stylesheet" href="./main.css" />
            </head>
            <body style="background-color:rgb(239, 230, 230)">
                <div class="row mt-5">
                <div class="col-md-12 d-flex justify-content-center">
                    <form name="Cal">
                    <div class="row ">
                        <div class="col-md-12 p-0">
                        <div class="form-group">
                            <textarea class="form-control" rows="3" id="total" type="text" name="ans"></textarea>
                        </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '1'">1</button>
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '2'">2</button>
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '3'">3</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '4'">4</button>
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '5'">5</button>
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '6'">6</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '7'">7</button>
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '8'">8</button>
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '9'">9</button>	
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '+'">+</button>	
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '0'">0</button>	
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '-'">-</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '/'">/</button>
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="Cal.ans.value += '*'">*</button>
                        </div>
                        <div class="col-xs-4">
                        <button type="button" class="btn" onclick="backspace()">⟵</button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-6 p-0">
                        <button type="button" class="btn" onclick=" Cal.ans.value = eval(Cal.ans.value)">=</button>
                        </div>
                        <div class="col-xs-6 p-0">
                        <button type="button" class="btn" onclick="clearscreen()">CE</button>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
                <script type="text/javascript">
                function clearscreen(){
                    document.getElementById('total').value = "";
                }
                function backspace(){
                    var back_space = document.getElementById('total');
                    var i =back_space.value;
                    if(i.length > 0){
                        i = i.substring(0, i.length-1);
                        back_space.value=i;
                    }
                }
                </script>	
            </body>
            </html>
        '''