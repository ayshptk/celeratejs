var engines = [

  {"n":"about", "a":"", "f":"https://github.com/dohliam/yub"},
  {"n":"g", "a":"https://www.google.com/search?q=%s",  "f":"https://google.com/"},
  {"n":"img", "a":"https://www.google.com/search?tbm=isch&q=%s", "f":"https://images.google.com/"},
  {"n":"mail", "a":"https://mail.google.com/mail/u/0/#search/%s", "f":"https://gmail.com/"},
  {"n":"drive", "a":"https://drive.google.com/#search/%s", "f":"https://drive.google.com/"},
  {"n":"a", "a":"https://www.amazon.com/exec/obidos/external-search?mode=blended&keyword=%s", "f":"https://www.amazon.com/"},
  {"n":"translate", "a":"https://translate.google.com/#auto/en/%s", "f":"https://translate.google.com"},
  {"n":"turl", "a":"https://translate.google.com/translate?u=%s", "f":"https://translate.google.com"},
  {"n":"book", "a":"https://books.google.com/books?q=%s&btnG=Search+Books", "f":"https://books.google.com"},
  {"n":"go", "a":"https://google.com/search?q=%s&btnI=I%27m+Feeling+Lucky", "f":"https://google.com"},
  {"n":"map", "a":"https://maps.google.com/maps?q=%s&output=classic", "f":"https://maps.google.com"},
  {"n":"scholar", "a":"https://scholar.google.com/scholar?q=%s", "f":"https://scholar.google.com"},
  {"n":"tnd", "a":"https://www.timeanddate.com/worldclock/results.html?query=%s", "f":"https://timeanddate.com/worldclock"},
  {"n":"weather", "a":"https://openweathermap.org/find?q=%s", "f":"https://openweathermap.org/"},
  {"n":"archive", "a":"https://web.archive.org/web/*/%s", "f":"https://archive.org"},
  {"n":"whois", "a":"https://www.whois.sc/%s", "f":"https://whois.sc"},
  {"n":"gwhois", "a":"https://gwhois.org/%s", "f":"https://gwhois.org"},
  {"n":"common", "a":"https://commons.wikimedia.org/wiki/Special:Search?search=%s", "f":"https://commons.wikimedia.org/"},
  {"n":"w", "a":"https://en.wikipedia.org/?search=%s", "f":"https://en.wikipedia.org/"},
  {"n":"wv", "a":"https://en.wikivoyage.org/?search=%s", "f":"https://en.wikivoyage.org/"},
  {"n":"wt", "a":"https://en.wiktionary.org/?search=%s", "f":"https://en.wiktionary.org/"},
  {"n":"wq", "a":"https://en.wikiquote.org/?search=%s", "f":"https://en.wikiquote.org/"},
  {"n":"wn", "a":"https://en.wikinews.org/?search=%s", "f":"https://en.wikinews.org/"},
  {"n":"ws", "a":"https://en.wikisource.org/?search=%s", "f":"https://en.wikisource.org/"},
  {"n":"news", "a":"https://news.google.com/news?q=%s", "f":"https://news.google.com"},
  {"n":"yt", "a":"https://www.youtube.com/results?search_type=&search_query=%s&aq=f", "f":"https://www.youtube.com/"},
  {"n":"fcc", "a":"https://www.flickr.com/search/?q=%s&l=4", "f":"https://www.flickr.com/creativecommons/by-2.0/"},
  {"n":"flk", "a":"https://www.flickr.com/search?text=%s", "f":"https://www.flickr.com/"},
  {"n":"play", "a":"https://play.google.com/store/search?q=%s&c=apps&price=1", "f":"https://play.google.com/"},
  {"n":"opc", "a":"https://openclipart.org/search/?query=%s", "f":"https://openclipart.org/"},
  {"n":"cache", "a":"https://google.com/search?q=cache:%s&strip=1", "f":"https://google.com"},
  {"n":"cat", "a":"https://google.com/search?q=cache:%s&strip=1", "f":"https://google.com"},
  {"n":"ynews", "a":"https://news.search.yahoo.com/search?p=%s", "f":"https://news.yahoo.com/"},
  {"n":"onelook", "a":"https://www.onelook.com/?w=%s&ls=a", "f":"https://www.onelook.com/"},
  {"n":"olr", "a":"https://www.onelook.com/?w=*&loc=revfp2&clue=%s", "f":"https://www.onelook.com/reverse-dictionary.shtml"},
  {"n":"ud", "a":"https://www.urbandictionary.com/define.php?term=%s", "f":"https://www.urbandictionary.com/"},
  {"n":"dic", "a":"https://dictionary.reference.com/browse/%s", "f":"https://dictionary.com/"},
  {"n":"thes", "a":"https://www.wordreference.com/thesaurus/%s", "f":"https://www.wordreference.com/thesaurus/"},
  {"n":"ted", "a":"https://www.ted.com/search?q=%s", "f":"https://ted.com"},
  {"n":"r", "a":"https://reddit.com/r/%s", "f":"https://reddit.com"},
  {"n":"ddg", "a":"https://duckduckgo.com/?q=%s", "f":"https://duckduckgo.com/"},
  {"n":"ext", "a":"https://filext.com/file-extension/%s", "f":"https://filext.com/"},
  {"n":"ebay", "a":"https://www.ebay.com/sch/i.html?_nkw=%s", "f":"https://www.ebay.com/"},
  {"n":"tw", "a":"https://twitter.com/%s", "f":"https://twitter.com/"},
  {"n":"tws", "a":"https://twitter.com/search?q=%s", "f":"https://twitter.com/search-advanced"},
  {"n":"imgur", "a":"https://imgur.com/search?q=%s", "f":"https://imgur.com/"},
  {"n":"gpdf", "a":"https://www.google.com/search?q=filetype:pdf+%s", "f":"https://www.google.com/search?q=filetype:pdf"},
  {"n":"gfim", "a":"https://www.google.com/search?tbm=isch&as_q=%s&tbs=sur:fmc", "f":"https://images.google.com/"},
  {"n":"ngram", "a":"https://books.google.com/ngrams/graph?content=%s", "f":"https://books.google.com/ngrams"},
  {"n":"gnas", "a":"https://www.google.com/search?q=%s site:news.google.com/newspapers", "f":"https://news.google.com/newspapers"},
  {"n":"gsite", "a":"https://www.google.com/search?q=site:%s", "f":"https://google.com/"},
  {"n":"hn", "a":"https://hn.algolia.com/?q=%s", "f":"https://news.ycombinator.com/"},
  {"n":"how", "a":"https://www.wikihow.com/?search=%s", "f":"https://www.wikihow.com/"},
  {"n":"ifixit", "a":"https://www.ifixit.com/Guide/search/%s", "f":"https://www.ifixit.com/"},
  {"n":"y", "a":"https://search.yahoo.com/search;?p=%s", "f":"https://yahoo.com"},
  {"n":"yim", "a":"https://images.search.yahoo.com/search/images;?p=%s", "f":"https://images.search.yahoo.com/"},
  {"n":"yv", "a":"https://video.search.yahoo.com/search/video;?p=%s", "f":"https://video.search.yahoo.com/"},
  {"n":"ym", "a":"https://maps.yahoo.com/place/?addr=%s", "f":"https://maps.yahoo.com"},
  {"n":"b", "a":"https://www.bing.com/search?q=%s", "f":"https://www.bing.com/"},
  {"n":"bim", "a":"https://www.bing.com/images/search?q=%s", "f":"https://www.bing.com/images/"},
  {"n":"btr", "a":"", "f":"https://www.bing.com/translator/"},
  {"n":"bn", "a":"https://www.bing.com/news/search?q=%s", "f":"https://www.bing.com/news/"},
  {"n":"bm", "a":"https://www.bing.com/maps/?where1=%s", "f":"https://www.bing.com/maps/"},
  {"n":"bv", "a":"https://www.bing.com/videos/search?q=%s", "f":"https://www.bing.com/videos/"},
  {"n":"gut", "a":"https://www.gutenberg.org/ebooks/search/?query=%s", "f":"https://www.gutenberg.org/"},
  {"n":"forvo", "a":"https://www.forvo.com/word/%s", "f":"https://www.forvo.com/"},
  {"n":"gc", "a":"https://code.google.com/hosting/search?q=%s", "f":"https://code.google.com/"},
  {"n":"sf", "a":"https://sourceforge.net/directory?q=%s", "f":"https://sourceforge.net/"},
  {"n":"git", "a":"https://github.com/search?q=%s", "f":"https://github.com/"},
  {"n":"bbc", "a":"https://www.bbc.co.uk/search?q=%s", "f":"https://www.bbc.com/news/"},
  {"n":"dw", "a":"https://www.dw.de/search/english/%s/category/9097/", "f":"https://www.dw.de/"},
  {"n":"nhken", "a":"https://www2.nhk.or.jp/nhkworld/search/query.cgi?qt=%s", "f":"https://www3.nhk.or.jp/nhkworld/"},
  {"n":"fr24en", "a":"https://www.france24.com/en/search/?Search[term]=%s&Search[page]=1", "f":"https://www.france24.com/en/"},
  {"n":"rfien", "a":"https://www.english.rfi.fr/search/sinequa_search/%s", "f":"https://www.english.rfi.fr/"},
  {"n":"abc", "a":"https://www.radioaustralia.net.au/international/search/%s", "f":"https://www.radioaustralia.net.au/"},
  {"n":"gg", "a":"https://groups.google.com/forum/#!search/%s", "f":"https://groups.google.com/"},
  {"n":"yg", "a":"https://groups.yahoo.com/neo/search?query=%s", "f":"https://groups.yahoo.com/"},
  {"n":"so", "a":"https://stackoverflow.com/search?q=%s", "f":"https://stackoverflow.com/"},
  {"n":"yw", "a":"", "f":"https://weather.yahoo.com/"},
  {"n":"yelp", "a":"https://www.yelp.com/search?find_desc=%s", "f":"https://www.yelp.com/"},
  {"n":"cnn", "a":"https://edition.cnn.com/search/?query=%s", "f":"https://edition.cnn.com/"},
  {"n":"rci", "a":"https://www.rcinet.ca/en/?s=%s", "f":"https://www.rcinet.ca/en/"},
  {"n":"cbc", "a":"https://www.cbc.ca/gsa/?q=%s", "f":"https://www.cbc.ca/news"},
  {"n":"db", "a":"https://www.dropbox.com/home/%s", "f":"https://dropbox.com"},
  {"n":"ibn", "a":"https://ibnlive.in.com/searcher/search.php?searchq=%s", "f":"https://ibnlive.in.com/"},
  {"n":"voa", "a":"https://www.voanews.com/search/search2.aspx#all|%s|0|allzones|min|now", "f":"https://www.voanews.com/"},
  {"n":"rpen", "a":"https://radio.cz/en/search/?query=%s", "f":"https://radio.cz/en"},
  {"n":"xhen", "a":"http://search.news.cn/language/search.jspa?id=en&t=1&t1=0&ss=&ct=&n1=%s&button=ok", "f":"http://www.news.cn/english/"},
  {"n":"ymail", "a":"", "f":"https://mail.yahoo.com"},
  {"n":"mail", "a":"", "f":"https://www.mail.com/"},
  {"n":"hmail", "a":"", "f":"https://hotmail.com"},
  {"n":"omail", "a":"", "f":"https://outlook.com"},
  {"n":"dd", "a":"https://downdetector.com/search/?q=%s", "f":"https://downdetector.com/"},
  {"n":"isup", "a":"https://www.downforeveryoneorjustme.com/%s", "f":"https://www.downforeveryoneorjustme.com/"},
  {"n":"dfeojm", "a":"https://www.downforeveryoneorjustme.com/%s", "f":"https://www.downforeveryoneorjustme.com/"},
  {"n":"ip", "a":"", "f":"https://www.whatismyip.com/"},
  {"n":"ggv", "a":"https://www.google.com/search?tbm=vid&q=%s", "f":"https://video.google.com/"},
  {"n":"gflights", "a":"https://www.google.ca/flights/#search;t=%s", "f":"https://flights.google.com/"},
  {"n":"trends", "a":"https://www.google.ca/trends/explore#q=%s", "f":"https://www.google.com/trends/"},
  {"n":"sp", "a":"https://startpage.com/do/search?query=%s", "f":"https://startpage.com/"},
  {"n":"spim", "a":"https://startpage.com/do/search?cat=pics&query=%s", "f":"https://startpage.com/"},
  {"n":"spv", "a":"https://startpage.com/do/search?cat=video&query=%s", "f":"https://startpage.com/"},
  {"n":"spsite", "a":"https://startpage.com/do/search?query=site:%s", "f":"https://startpage.com/"},
  {"n":"ix", "a":"https://ixquick.com/do/search?q=%s", "f":"https://www.ixquick.com/"},
  {"n":"ixim", "a":"https://ixquick.com/do/search?cat=pics&query=%s", "f":"https://ixquick.com/"},
  {"n":"ixv", "a":"https://ixquick.com/do/search?cat=video&query=%s", "f":"https://ixquick.com/"},
  {"n":"ixsite", "a":"https://ixquick.com/do/search?q=site:%s", "f":"https://www.ixquick.com/"},
  {"n":"vi", "a":"https://vimeo.com/search?q=%s", "f":"https://vimeo.com/"},
  {"n":"fspam", "a":"https://www.stopforumspam.com/ipcheck/%s", "f":"https://www.stopforumspam.com/"},
  {"n":"lmd", "a":"https://mondediplo.com/spip.php?page=recherche&recherche=%s", "f":"https://mondediplo.com/"},
  {"n":"gv", "a":"https://globalvoicesonline.org/?s=%s", "f":"https://globalvoicesonline.org/"},
  {"n":"eun", "a":"", "f":"https://www.euronews.com/"},
  {"n":"reu", "a":"https://www.reuters.com/search?blob=%s", "f":"https://www.reuters.com/"},
  {"n":"swi", "a":"https://www.swissinfo.ch/action/eng/40468904/search?query=%s", "f":"https://www.swissinfo.ch/eng"},
  {"n":"rt", "a":"https://rt.com/search/everywhere/term/%s/", "f":"https://rt.com/"},
  {"n":"blm", "a":"https://search1.bloomberg.com/search/?content_type=all&q=%s", "f":"https://www.bloomberg.com/news/"},
  {"n":"ascii", "a":"https://www.network-science.de/ascii/ascii.php?TEXT=%s&x=8&y=7&FONT=_all+fonts+with+your+text_&RICH=no&FORM=left&STRE=no", "f":"https://www.network-science.de/ascii/"},
  {"n":"del", "a":"https://delicious.com/tag/%s", "f":"https://delicious.com/"},
  {"n":"wa", "a":"https://www.wolframalpha.com/input/?i=%s", "f":"https://www.wolframalpha.com/"},
  {"n":"npr", "a":"https://www.npr.org/templates/search/index.php?searchinput=%s", "f":"https://www.npr.org/"},
  {"n":"mo", "a":"https://www.google.com/gwt/n?u=%s", "f":"https://www.google.com/"},
  {"n":"js", "a":"https://developer.mozilla.org/en-US/search?q=%s", "f":"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
  {"n":"rb", "a":"https://ruby-doc.com/search.html?q=%s", "f":"https://ruby-doc.com/"},
  {"n":"php", "a":"https://www.php.net/%s", "f":"https://www.php.net/"},
  {"n":"py", "a":"https://docs.python.org/3/search.html?q=%s", "f":"https://docs.python.org/"},
  {"n":"sh", "a":"https://mywiki.wooledge.org/ParsingLs?action=fullsearch&context=180&value=%s&fullsearch=Text", "f":"https://mywiki.wooledge.org/BashFAQ/"},
  {"n":"jshint", "a":"", "f":"https://jshint.com/"},
  {"n":"flint", "a":"https://www.flickr.com/photos/tags/%s/interesting/", "f":"https://www.flickr.com/"},
  {"n":"lman", "a":"https://man.he.net/?section=all&topic=%s", "f":"https://man.he.net/"},
  {"n":"hl", "a":"https://news.search.yahoo.com/news/rss?ei=UTF-8&p=%s&c=&eo=UTF-8", "f":"https://news.search.yahoo.com/"},
  {"n":"imdb", "a":"https://www.imdb.com/find?q=%s", "f":"https://www.imdb.com/"},
  {"n":"ccm", "a":"http://ccmixter.org/api/query?search=%s", "f":"http://ccmixter.org/"},
  {"n":"ccmt", "a":"http://ccmixter.org/api/query?tags=%s", "f":"http://ccmixter.org/"},
  {"n":"jam", "a":"https://www.jamendo.com/en/search?qs=q=%s", "f":"https://www.jamendo.com/"},
  {"n":"sc", "a":"https://soundcloud.com/search?q=%s", "f":"https://soundcloud.com/"},
  {"n":"ar", "a":"https://archive.org/search.php?query=%s", "f":"https://archive.org/"},
  {"n":"medium", "a":"https://medium.com/search?q=%s", "f":"https://medium.com/"}
];
function StartPgComm(searchh) {
  var searchlc = searchh.toLowerCase().replace(/[\s\+]$/, "");

  var finished = "";

  var o = document.getElementById("output");
  var y = document.getElementById("StartPg");

  if (searchlc == "") {
    o.innerHTML = "Please enter a command.";
    finished = "done";
  }

  var shcut = searchlc.replace(/^([>a-z]+) .*/,"$1");
  var sterm = searchh.replace(/[\s\+]+$/, "").replace(/^[>A-Za-z]+ (.*)/,"$1");
  var stermlc = sterm.toLowerCase();

  addr = "";
  loc = "";

  if (shcut == "qr") {
    p = '<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+ sterm + '" height="150" width="150">';
    o.innerHTML = p;
    finished = "done";
  }
  if (/^((https*|ftp|file|chrome):\/\/)|(about:)/.test(searchh)) {
    addr = searchh;
    window.location=addr;
    finished = "done";
  }

  if (/^\!/.test(searchh)) {
    addr = searchh.replace(/^\! */,"https://duckduckgo.com?q=!");
    window.location=addr;
    finished = "done";
  }
  if (shcut == "calc" || shcut == "c") {
    o.innerHTML = eval(sterm.replace(/[a-zA-Z]/g, "").replace(/([\d\.]+)\^([\d\.]+)/g, "Math.pow($1,$2)").replace(/~([\d\.]+)/g, "Math.round($1)"));
    finished = "done";
  }
  if (shcut == "random" || shcut == "rand") {
    if (sterm == "git") {
      randgit();
    } else if (sterm == "img") {
      var addr = "https://imgur.com/random";
      window.location = addr;
    } else {
      var rfloor = sterm.replace(/[^\d]/g, "");
      rfloor == "" ? rfloor = 101 : rfloor = parseInt(rfloor) + 1;
      o.innerHTML = Math.floor(Math.random()*rfloor);
    }
    finished = "done";
  }

  if (shcut == "sort") {
    if (/\s/.test(searchlc) == false) {
      o.innerHTML = "Please input some text to sort.";
    } else {
      var d = delimit(sterm);
      o.innerHTML = d.sort().join("<br>");
    }
    y.value = "";
    finished = "done";
  }


  if (shcut == "ucase" || shcut == "upcase") {
    if (/\s/.test(searchlc) == false) {
      o.innerHTML = "Please input some text to convert to upper case.";
    } else {
      o.innerHTML = sterm.toUpperCase();
    }
    finished = "done";
  }

  if (shcut == "lcase" || shcut == "downcase") {
    if (/\s/.test(searchlc) == false) {
      o.innerHTML = "Please input some text to convert to lower case.";
    } else {
      o.innerHTML = sterm.toLowerCase();
    }
    finished = "done";
  }

  if (shcut == "ccase" || shcut == "capcase" || shcut == "caps") {
    if (/\s/.test(searchlc) == false) {
      o.innerHTML = "Please input some text to convert to initial caps.";
    } else {
      o.innerHTML = sterm.toLowerCase().replace(/(^|\s+)(.)/g,function(_, a, l){return a+l.toUpperCase();});
    }
    finished = "done";
  }

  if (shcut == "wc") {
    if (/\s/.test(searchlc) == false) {
      o.innerHTML = "Please input some text to count.";
    } else if (/^\-c /.test(sterm) == true) {
      c = sterm.replace(/^\-c /,"");
      o.innerHTML = c.split(/./).length -1;
    } else {
      var d = delimit(sterm);
      o.innerHTML = d.length;
    }
    y.value = "";
    finished = "done";
  }

  if (shcut == "imgedit" || shcut == "editimg") {

      p = '<iframe width=80% height=600 src="minipaint-master/index.html" frameborder="0" allowfullscreen></iframe>';
      o.innerHTML = p;

    finished = "done";
  }

  if (shcut == "colorpal" ) {

      p = '<iframe width=80% height=600 src="color/index.html" frameborder="0" allowfullscreen></iframe>';
      o.innerHTML = p;

    finished = "done";
  }

  if (shcut == "txtedit")  {

      p = '<iframe width=80% height=600 src="txtedit.html" frameborder="0" allowfullscreen></iframe>';
      o.innerHTML = p;

    finished = "done";
  }



  if (shcut == "timer" || shcut == "stopwatch") {
    timer();

    y.value = "";
    finished = "done";
  }

  if (shcut == "day" || shcut == "date" || shcut == "d") {
    d = new Date();
    day = d.getDay().toString().replace(/0/,"Sunday").replace(/1/,"Monday").replace(/2/,"Tuesday").replace(/3/,"Wednesday").replace(/4/,"Thursday").replace(/5/,"Friday").replace(/6/,"Saturday");
    iso = d.toISOString().replace(/T.*/,"");
    o.innerHTML = day + "<br><div class='grey'>(" + iso + ")</div>";
    finished = "done";
  }

  for (var i = 0; i < engines.length; i++) {
    if (engines[i].n == shcut) {
      finished = "done";
      if (shcut == stermlc && /\s/.test(searchlc) == false) {
        addr = engines[i].f;
        window.location=addr;
      } else {
        loc = engines[i].a;
        addr = loc.replace(/%s/,sterm);
        window.location=addr;
      }
    }
  }



  if (finished == "") {
    addr = "https://google.com/search?q=" + searchh
    window.location=addr;
    finished = "done";
  }
}




      function StartPgSearch(searchh) {
        StartPgComm(searchh);
        return false;
      }

      function delimit(a) {
        var b = new Array(0);
        if (/^\-t /.test(a)) {
          d = a.replace(/^\-t (.*?) .*/,"$1");
          b = a.replace(/^\-t (.*?) /,"").split(d);
        } else if (/\t/.test(a)) {
          b = a.split("\t");
        } else {
          b = a.split(" ");
        }
        return b;
      }

      function timer() {
        var sw = document.getElementById("timer");
        sw.style.display = '';

        window.sec = min = hour = 0;
        window.clock = 0;

      }

      function stopWatch() {
        clearTimeout(window.clock);
        window.sec++;
          if (window.sec >=59){
            window.sec = 0;
            min++;
          }
          if (min>=59){
            min=0;
            hour++;
          }
        document.getElementById("sec").innerHTML = (window.sec < 10) ? "0" + window.sec : window.sec;
        document.getElementById("min").innerHTML = (min < 10) ? "0" + min : min;
        document.getElementById("hour").innerHTML = (hour < 10) ? "0" + hour : hour;
        window.clock = setTimeout("stopWatch()",1000);
      }

      function pause() {
        clearTimeout(window.clock);
        return false;
      }

      function play() {
        stopWatch();
        return false;
      }

      function reset() {
        clearTimeout(window.clock);
        window.sec = min = hour = 0;
        document.getElementById("sec").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("hour").innerHTML = "00";
        return false;
      }

      function clearTimer() {
        document.getElementById("timer").style.display = "none";
      }

      function randgit() {
        function init(){
          var number = getRandomIntInclusive(0, 60000000);
          console.log(number);

          var xhr = new XMLHttpRequest();
          xhr.open('GET', 'https://api.github.com/repositories?since=' + number, true);
          xhr.send();

          xhr.onreadystatechange = function(e){
            openRepo(e, xhr)
          };
        }

        function getRandomIntInclusive(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function openRepo (e, xhr){
          if (xhr.readyState == 4 && xhr.status == 200) {
            var full_name = JSON.parse(xhr.responseText)[0]['full_name'];
            location.href = 'https://github.com/' + full_name;
          }
        }
        init();
      }
