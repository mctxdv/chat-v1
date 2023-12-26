var now = new Date();

var Year = now.getFullYear();
var Month = now.getMonth()+1;
var Date = now.getDate();
var Hour = now.getHours();
var Min = now.getMinutes();
var Sec = now.getSeconds();

window.onload = async function() {
  console.log(document.location+'が正常に読み込まれました。(' + Year + "年" + Month + "月" + Date + "日" + Hour + ":" + Min + ":" + Sec+')');
  
  var openButton = document.getElementById('openButton');
  if (openButton) {
    var modal = document.getElementById('myModal');
    openButton.onclick = function(e) {
      e.preventDefault(); 
      modal.style.display = 'block';
    }
    
    function closeModal() {
      modal.style.display = 'none';
    }
    
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
    
    // navbarの高さを取得
    var navbarHeight = document.getElementById('navbar').offsetHeight;
    var navbarBreak = document.querySelector('.navbarbreak');
    if (navbarBreak) {
      navbarBreak.style.marginTop = navbarHeight + 'px';
    }
  }

  // DOMContentLoaded イベントで以下の処理を実行
  document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.getElementById('homeLink');
    const eventsLink = document.getElementById('eventsLink');
    const linksLink = document.getElementById('linksLink');

    const homeContent = document.getElementById('home');
    const eventsContent = document.getElementById('events');
    const linksContent = document.getElementById('links');

    homeLink.addEventListener('click', function (e) {
      e.preventDefault();
      toggleContent(homeLink, homeContent);
    });

    eventsLink.addEventListener('click', function (e) {
      e.preventDefault();
      toggleContent(eventsLink, eventsContent);
    });

    linksLink.addEventListener('click', function (e) {
      e.preventDefault();
      toggleContent(linksLink, linksContent);
    });

    function toggleContent(link, content) {
      if (!link.classList.contains('active')) {
        // 選択されたリンクがアクティブでない場合
        link.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        // 選択されたリンクが既にアクティブな場合
        link.classList.remove('active');
        content.style.maxHeight = null;
      }
    }
  });
}