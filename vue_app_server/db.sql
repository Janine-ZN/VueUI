#1:进入xz库中
USE xz;
#2:创建新闻表
CREATE TABLE xz_news(
 id    INT PRIMARY KEY AUTO_INCREMENT, 
 title VARCHAR(128),
 ctime DATETIME,
 img_url VARCHAR(255),
 point INT
);
#now() 当前数据库时间 年月日时分秒
INSERT INTO xz_news VALUES(null,'..1',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..2',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..3',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..4',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..5',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..6',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..7',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..8',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..9',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..10',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..11',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..12',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..13',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..14',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);
INSERT INTO xz_news VALUES(null,'..15',now(),
"http://127.0.0.1:3000/img/muwu.jpg",0);










