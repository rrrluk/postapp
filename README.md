# postapp

Siin on näha kuidas saada form data-st key value pair

      Object.keys(req.body).forEach(function(k){
        console.log(k + ' - ' + req.body[k]);
    });
