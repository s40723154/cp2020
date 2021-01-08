var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n', 'tags': '', 'url': 'Develop.html'}, {'title': 'cmsimde', 'text': '動態網頁的主要檔案為\xa0 config/content.htm \n 當使用者在命令列中將目錄更換到 cmsimde, 然後以 python wsgi.py 執行 wsgi.py 程式時, 其實 Python 程式是仰賴 Flask 網際框架結構來進行資料伺服. \n CMSiMDE 的作動需要 Flask 網際框架, 需要 bs4 與 lxml 進行 content.htm 的頁面解讀, 透過超文件檔案中的 h1, h2 與 h3 由上到下執行循序式分頁, 之後再透過 Javascript 與 css 將 h1, h2, h3 依照樹狀結構, h1 標題為第一階, h2 為第二階, h3 為第三階 \n', 'tags': '', 'url': 'cmsimde.html'}, {'title': 'CMSiMDE 程式架構', 'text': '', 'tags': '', 'url': 'CMSiMDE 程式架構.html'}, {'title': '網際內容管理', 'text': '全球資訊網無遠弗屆, 而且 WWW 的伺服架構相對於手機 APP 對於使用者而言更加友善, 除了允許多重身分無需實名綁定之外, 可以讓工程師進行各種協同設計, 因此若能廣泛利用網際環境建立各種應用程式環境, 將有助提升設計效益. \n', 'tags': '', 'url': '網際內容管理.html'}, {'title': '如何建立CMSIMDE子模組', 'text': 'git submodule add \xa0 https://github.com/mdecourse/cmsimde.git \xa0cmsimde \n 表示要透過 git submodule add 將 \xa0 https://github.com/mdecourse/cmsimde.git \xa0遠端倉儲當作子模組, 而且將資料存入子目錄 cmsimde 中 \n', 'tags': '', 'url': '如何建立CMSIMDE子模組.html'}, {'title': '兩種git clone', 'text': 'git clone \xa0 https://github.com/mdecourse/cmsimde.git \n 表示要將 cmsimde 倉儲的資料 clone 到近端, 針對沒有子模組設置的倉儲可以直接以 git clone 取下倉儲資料 \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/cp2020.git \n 表示要將 cp2020 倉儲中包含個子模組與可能子模組中的子模組等資料, 全部 clone 到近端. \n', 'tags': '', 'url': '兩種git clone.html'}, {'title': '為何需要動態網頁和靜態網頁', 'text': '所謂的動態網頁指的是有登入系統配置的網際內容管理系統, 當使用者登入後進行內容管理, 網站會馬上呈現新版本內容, 通常無需進行網頁轉換. \n 所謂的靜態網頁則指網站通常沒有登入系統的配置, 而且通常只包含 html 與 Javascript 資料, 由於沒有登入系統, 因此沒有內容被駭的問題, 除非負責伺服超文件網頁的系統遭駭. \n 而 CMSiMDE 的動態網頁用於編輯網站內容, 而靜態網頁則可以利用 Github Pages, Gitlab Pages 與 Heroku 進行伺服. \n 假如 CMSiMDE 不設為子模組 << \xa0 Previous \xa0 Next \xa0 >> CMSiMDE 有甚麼使用上的限制嗎比方說能夠使用那些特殊符號, 為什麼不能使用分號, 以及所謂的標題有沒有最多幾個字元的限制, 另外就是假如標題過長, 會發生甚麼狀況與後果 \n', 'tags': '', 'url': '為何需要動態網頁和靜態網頁.html'}, {'title': 'hw1', 'text': '', 'tags': '', 'url': 'hw1.html'}]};