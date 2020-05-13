var first_class = [
    {name: "이유영", nickname: null, age: 24},
    {name: "엄서영", nickname: null, age: 26},
    {name: "황지혜", nickname: null, age: 22},
    {name: "신윤재", nickname: "윤자이", age: 26},
    {name: "홍준엽", nickname: null, age: 26},
    {name: "정형일", nickname: null, age: 25}
]

first_class.forEach(
    member => console.log("이름:", member.name, "별명:",  member.nickname, "나이:", member.age)
);