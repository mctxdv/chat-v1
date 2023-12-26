document.addEventListener('DOMContentLoaded', function () {
    const now = new Date();
    const Year = now.getFullYear();
    const Month = now.getMonth() + 1;
    const day = now.getDate();
    const Hour = now.getHours();
    const Min = now.getMinutes();
    const Sec = now.getSeconds();

    console.log(document.location + ' が正常に読み込まれました。(' + Year + '年' + Month + '月' + day + '日' + Hour + ':' + Min + ':' + Sec + ')');

    const openButton = document.getElementById('openButton');

    if (openButton) {
        const modal = document.getElementById('myModal');

        openButton.onclick = function (e) {
            e.preventDefault();
            modal.style.display = 'block';
        }

        function closeModal() {
            modal.style.display = 'none';
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }

        // navbarの高さを取得
        const navbarHeight = document.getElementById('navbar').offsetHeight;
        const navbarBreak = document.querySelector('.navbarbreak');

        if (navbarBreak) {
            navbarBreak.style.marginTop = navbarHeight + 'px';
        }
    }

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

    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("myModal");
    const closeBtn = document.querySelector(".close");

    if (openModalBtn && modal && closeBtn) {
        openModalBtn.addEventListener("click", function () {
            modal.style.display = "block";
        });

        closeBtn.addEventListener("click", function () {
            modal.style.display = "none";
        });

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }
});
