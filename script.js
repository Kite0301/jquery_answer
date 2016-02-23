$(function(){
  // トップへ戻るボタン
  $('#top-btn').click(function(){
    $('html,body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });

  // ヘッダーナビ
  $('header a').click(function(){
    var id = $(this).attr('href');
    var height = $(id).offset().top;
    $("html,body").animate({scrollTop: height }, 500);
    return false;
  });

  // カルーススライダー部分
  $('.carousel').carousel({
    interval: 2000
  });

  // お問い合わせフォーム部分
    $('.contact-form form').submit(function(){
      var error_flag = false;
      $(this).children('input, textarea').each(function(){
        var body = $(this).val();
        if (!body) {
          $(this).prev('.error-message').text('入力してください');
          error_flag = true;
        } else {
          $(this).prev('.error-message').text('');
        }
      });

      if (!error_flag) {
        $('.contact-form').html('<h4>お問い合わせありがとうございます。</h4>');
      }
      return false;
    });

    // SNSボタン
    $('.social-icon').hover(
      function(){
        $(this).children('i').animate({
          'font-size':'30px'
        }, 500);
      },
      function(){
        $(this).children('i').animate({
          'font-size':'24px'
        }, 300);
      }
    );

  });
