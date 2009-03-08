// ==UserScript==
// @name          Gmail with Fries
// @namespace     http://coolerator.net/gmail-with-fries
// @author        Corey Innis <corey@coolerator.net>
// @description   My Gmail customization.
// @version       0.1.0 2009-03-08
// @include       http://mail.google.com/*
// @include       https://mail.google.com/*
// ==/UserScript==

if(document.location == top.location) {
  (function() {
    prep = function() {
      var preparations = Array.prototype.slice.call(arguments);
      var deep_fry     = preparations.pop();
      var kitchen      = document.getElementsByTagName('head')[0];
      var taste_tests  = [];

      for(follow in preparations) {
        var preparation  = preparations[follow];
        var ramekin      = document.createElement('script');

        ramekin.src  = preparation.ingredient;
        ramekin.type = 'text/javascript';
        kitchen.appendChild(ramekin);

        taste_tests.push(preparation.is_tasty);
      }

      var taste_tries = 20;

      taste = function() {
        for(check in taste_tests) {
          if((taste_tries --) <= 0) {
            alert('chef: yuck!');
            return;
          }

          if( ! taste_tests[check]()) {
            window.setTimeout(taste, 100);
            return;
          }
        }

        deep_fry();
      }

      taste();
    }

    prep(
      {
        ingredient: 'http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js',
        is_tasty:   function() { return typeof window.jQuery != 'undefined'; }
      },
      function() {
        peel = function() {
          $ = window.jQuery;
        }

        cook = function() {
          var self = this;
          $(document).ready(self.salt);
        }

        salt = function() {
          setTimeout(function() {
            $("<div>enjoy the fries!</div>")
              .css(
                {
                  display:        'none',
                  position:       'absolute',
                  top:            '20px',
                  left:           '50%',
                  opacity:        '0.8',
                  width:          '200px',
                  height:         '140px',
                  margin:         '0 0 0 -100px',
                  background:     '#000',
                  color:          '#999',
                  'line-height':  '140px',
                  'text-align':   'center',
                  'border-radius':          '16px',
                  '-webkit-border-radius':  '16px'
                })
              .click(function() {
                $(this).fadeOut('slow', function() {
                  $(this).remove();
                })
              })
              .prependTo('body')
              .fadeIn('slow');
            },
            5000
          )
        }

        peel();
        cook();
      }
    );
  })();
}
