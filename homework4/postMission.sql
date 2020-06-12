USE Sopt;

SELECT * FROM post;

/-- post 데이터의 개수 --/
select count(*) from post;

/-- post title만 가져오기 --/
select title from post;

/-- 아무 값이나 INSERT 해보기 --/
insert into post values(21, "Joy Lee", "Phantom of the Opera", "fjksjjsjjjdjjdfmmskkkamfjjdkskkkdmfkkdks", 0000-00-00);
SELECT * FROM post;

/-- postIdx가 3인 데이터 조회하기 --/
select * from post where postIdx=3;

/-- postIdx가 2인 post 개체들을 모두 출력하기 --/
select * from post where postIdx=2;

/-- 선택 ) post.sql 17 ~ 26을 실행시켰다면 userIdx가 4인 post+user 개체를 JOIN으로 출력해보기 --/

/-- postIdx가 2인 데이터 날짜 현재로 수정하기 --/
update post set createdAt='2020-06-11' where postIdx=2;
select * from post where postIdx=2;

/-- postIdx가 4인 데이터 지우기 --/
delete from post where postIdx=4;
select * from post where postIdx=4;