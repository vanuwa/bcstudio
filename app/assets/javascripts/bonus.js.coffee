# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
do ->
  ready = undefined
  ready = ->
    circle = new (ProgressBar.Circle)('#progress',
      color: '#FCB03C'
      strokeWidth: 4
      duration: 3000
      easing: 'easeInOut'
      )
    $('footer').hide()
    $('.typingText').typed
      strings: [
        'WOW… Congratulations! Your brave click has just earned you a 15% off gift card. '
      ]
      typeSpeed: 100
      startDelay: 600
    flyingCard = setTimeout((->
      $('.bonus-card1').animate({left: "50%"}, 1500, 'easeOutBounce')
      $('.typingText2').typed
        strings: [
          'THE NEXT… stay 5 seconds with our top geeks, pick up your surprise at the end. '
        ]
        typeSpeed: 100
        startDelay: 1000
      return
    ), 12600)
    slideFirst = setTimeout((->
      $('#firstSlide').css('opacity', '0')
      $('#bonus').css('background-color', 'white')
      # slideThird = setTimeout((->
      #   $('#thirdSlide').css('opacity', 1)
      slideFourth = setTimeout((->
        # $('#thirdSlide').css('opacity', 0)
        $('#workerSlide1').css('opacity', 1)
        $('#progress').css('opacity', 1)
        circle.animate 0.33
        slideFive = setTimeout((->
          $('#workerSlide1').css('opacity', 0)
          $('#workerSlide2').css('opacity', 1)
          circle.animate 0.66
          slideSix = setTimeout((->
            $('#workerSlide2').css('opacity', 0)
            $('#workerSlide3').css('opacity', 1)
            circle.animate 1
            slideSeven = setTimeout((->
              $('#workerSlide3').css('opacity', 0)
              $('#progress').css('opacity', 0)
              $('#bonusSlide').css('opacity', 1)
              slideSeven = setTimeout((->
                $('.bonus-card2').animate({left: "50%"}, 1500, 'easeOutBounce')
                $('.typingText3').typed
                  strings: [
                    'Thank you for visiting us, see us more often… :)'
                  ]
                  typeSpeed: 100
                  startDelay: 1000
                return
              ), 1000)
              return
            # ), 100)
            ), 7000)
            return
          # ), 100)
          ), 7000)
          return
        # ), 100)
        ), 7000)
        return
      # ), 100)
      ), 1000)
      return
    # ), 100)
    ), 25000)
    
  if ((location.pathname == '/en/bonus') | (location.pathname == '/ua/bonus') | (location.pathname == '/bonus'))
    $(document).ready ready
    $(document).on 'page:load', ready
  return