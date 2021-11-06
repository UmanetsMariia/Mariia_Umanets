function first_non_repeating_letter(s) {
    var x = s.replace(" ", "");
    for (var i = 0; i < x.length; i++) {
      if (x.charCodeAt(i) < 96) {
       
        var y = x.replace(x[i], "");
        var z = String.fromCharCode(x.charCodeAt(i) + 32);
        if (y.indexOf(x[i]) > -1 || y.indexOf(z) > -1) {
          continue;
        } else {
          var k = x[i];
        }
        return k;
      } else if (x.charCodeAt(i) > 96) {
        
        var y = x.replace(x[i], "");
        var z = String.fromCharCode(x.charCodeAt(i) - 32);
        if (y.indexOf(x[i]) > -1 || y.indexOf(z) > -1) {
          continue;
        } else {
          var k = x[i];
        }
        return k;
      }
    }
  }

console.log(first_non_repeating_letter('stress'));
console.log(first_non_repeating_letter('sTreSS'));
